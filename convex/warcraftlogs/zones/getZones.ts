import { internal } from "../../_generated/api";
import { action } from "../../_generated/server";
import { getWarcraftLogsAccessToken } from "../auth/getAccessToken";
import { wclApi } from "../types";

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
export async function getZones(accessToken?: string): Promise<getZonesOutput> {
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

  return body.data.worldData.zones as getZonesOutput;
}

export const getZonesAction = action({
  args: {},
  handler: async (ctx, args) => {
    const token = await ctx.runAction(
      // @ts-ignore
      internal.warcraftlogs.auth.getAccessToken.getWarcraftLogsTokenAction
    );

    const data = await getZones(token);

    return data.data.worldData.zones;
  },
});
