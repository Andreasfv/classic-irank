import { internal } from "../../_generated/api";
import { internalAction, internalQuery } from "../../_generated/server";
/* 
    Function to get the access token for the Warcraft Logs API
*/

export const warcraftLogsTokenName = "warcraftLogs";

export async function getWarcraftLogsAccessToken() {
  console.log("Access token fetched from WCL");
  const url = "https://www.warcraftlogs.com/oauth/token";

  const formData = new FormData();
  formData.append("grant_type", "client_credentials");
  formData.append("client_id", process.env.WCL_CLIENT_ID ?? "");
  formData.append("client_secret", process.env.WCL_CLIENT_SECRET ?? "");

  const response = await fetch(url, {
    method: "POST",
    headers: {},
    body: formData,
  });

  const json = await response.json();

  return {
    accessToken: json.access_token as string,
    expiresIn: json.expires_in as string,
  };
}

export const getWarcraftLogsTokenQuery = internalQuery({
  args: {},
  handler: async (ctx) => {
    const token = await ctx.db
      .query("accessTokens")
      .filter((q) => q.eq(q.field("name"), warcraftLogsTokenName))
      .first();
    return token;
  },
});

export const getWarcraftLogsTokenAction = internalAction({
  args: {},
  handler: async (ctx): Promise<string> => {
    const token = await ctx.runQuery(
      //@ts-ignore "ts-expect-error" doesnt understand the internal object.
      internal.wclApi.auth.getAccessToken.getWarcraftLogsTokenQuery
    );
    //If no token exists, create a new one.
    //OAuth v2 gives expiresIn as seconds, so we need to convert it to milliseconds.
    if (!token) {
      const newToken = getWarcraftLogsAccessToken();
      await ctx.runMutation(internal.auth.createAccessToken.createAccessToken, {
        name: warcraftLogsTokenName,
        accessToken: (await newToken).accessToken,
        expiresIn:
          Number((await newToken).expiresIn) * 1000 + new Date().getTime(),
      });
      return (await newToken).accessToken;
    }

    //If token exists, check if it is expired. If it is, create a new one.
    const currentTime = new Date();

    if (currentTime.getTime() > token.expiresIn - 2000) {
      const newToken = getWarcraftLogsAccessToken();

      await ctx.runMutation(
        internal.auth.replaceAccessToken.replaceAccessToken,
        {
          id: token._id,
          name: "warcraftLogs",
          accessToken: (await newToken).accessToken,
          expiresIn:
            Number((await newToken).expiresIn) * 1000 + new Date().getTime(),
        }
      );
      return (await newToken).accessToken;
    }

    return token.accessToken;
  },
});
