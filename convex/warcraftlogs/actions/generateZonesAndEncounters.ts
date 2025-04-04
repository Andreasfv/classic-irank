import { internal } from "../../_generated/api";
import { action } from "../../_generated/server";
import { getZones } from "../wclApi/zones/getZones";

export const generateZonesAndEncounters = action(async (ctx) => {
  const accessToken = await ctx.runAction(
    // @ts-ignore
    internal.warcraftlogs.wclApi.auth.getAccessToken.getWarcraftLogsTokenAction
  );

  const zones = await getZones(accessToken);

  const data = zones.map((zone) => ({
    zoneID: zone.id,
    name: zone.name,
    encounters: zone.encounters.map((encounter) => ({
      encounterID: encounter.id,
      name: encounter.name,
    })),
  }));

  await ctx.runMutation(
    //@ts-ignore
    internal.warcraftlogs.mutations.createZoneWithEncounters
      .createZonesAndEncounters,
    { data: data }
  );
});
