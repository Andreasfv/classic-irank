import { internal } from "../../_generated/api";
import { action } from "../../_generated/server";
import { wclApi } from "../../warcraftlogs/types";
import { getWarcraftLogsAccessToken } from "../auth/getAccessToken";

export interface getZonesOutput {
  data: {
    worldData: {
      zones: {
        id: number;
        frozen: boolean;
        name: string;
        encounters: { id: number; name: string }[];
      }[];
    };
  };
}
export async function getZones(
  accessToken?: string
): Promise<getZonesOutput["data"]["worldData"]["zones"]> {
  const token = accessToken ?? (await getWarcraftLogsAccessToken()).accessToken;
  const query = {
    query: `
        query WorldData {
            worldData {
                zones {
                    id
                    frozen
                    name
                    encounters {
                        id
                        name
                    }
                }
            }
        }`,
  };

  const response = await fetch(wclApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(query),
  });

  if (!response.ok) {
    console.log(response.statusText);
    throw new Error("Failed to get zones");
  }

  const body = await response.json();

  if (!body?.data?.worldData?.zones) {
    console.log("No data found");
    console.log(body);
    throw new Error("No zones found");
  }

  return body.data.worldData
    .zones as getZonesOutput["data"]["worldData"]["zones"];
}

export const getZonesAction = action({
  args: {},
  handler: async (ctx) => {
    const token = await ctx.runAction(
      internal.wclApi.auth.getAccessToken.getWarcraftLogsTokenAction
    );

    const data = await getZones(token);

    return data;
  },
});
