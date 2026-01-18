/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as auth_createAccessToken from "../auth/createAccessToken.js";
import type * as auth_replaceAccessToken from "../auth/replaceAccessToken.js";
import type * as auth from "../auth.js";
import type * as http from "../http.js";
import type * as schema_auth_accessTokens from "../schema/auth/accessTokens.js";
import type * as schema_tasks_tasks from "../schema/tasks/tasks.js";
import type * as schema_warcraftLogs_encounter from "../schema/warcraftLogs/encounter.js";
import type * as schema_warcraftLogs_rankings from "../schema/warcraftLogs/rankings.js";
import type * as schema_warcraftLogs_zone from "../schema/warcraftLogs/zone.js";
import type * as warcraftlogs_actions_generateRankingDataForSpec from "../warcraftlogs/actions/generateRankingDataForSpec.js";
import type * as warcraftlogs_actions_generateZonesAndEncounters from "../warcraftlogs/actions/generateZonesAndEncounters.js";
import type * as warcraftlogs_actions_index from "../warcraftlogs/actions/index.js";
import type * as warcraftlogs_actions from "../warcraftlogs/actions.js";
import type * as warcraftlogs_convexTypes_className from "../warcraftlogs/convexTypes/className.js";
import type * as warcraftlogs_convexTypes_specName from "../warcraftlogs/convexTypes/specName.js";
import type * as warcraftlogs_convexTypes_zoneWithEncounter from "../warcraftlogs/convexTypes/zoneWithEncounter.js";
import type * as warcraftlogs_mutations_createZoneWithEncounters from "../warcraftlogs/mutations/createZoneWithEncounters.js";
import type * as warcraftlogs_mutations_index from "../warcraftlogs/mutations/index.js";
import type * as warcraftlogs_mutations_ranking from "../warcraftlogs/mutations/ranking.js";
import type * as warcraftlogs_mutations from "../warcraftlogs/mutations.js";
import type * as warcraftlogs_queries_getRankingsForEncounter from "../warcraftlogs/queries/getRankingsForEncounter.js";
import type * as warcraftlogs_queries_getZoneWithEncounters from "../warcraftlogs/queries/getZoneWithEncounters.js";
import type * as warcraftlogs_queries_index from "../warcraftlogs/queries/index.js";
import type * as warcraftlogs_queries from "../warcraftlogs/queries.js";
import type * as warcraftlogs_types_actor from "../warcraftlogs/types/actor.js";
import type * as warcraftlogs_types_consts from "../warcraftlogs/types/consts.js";
import type * as warcraftlogs_types_encounter from "../warcraftlogs/types/encounter.js";
import type * as warcraftlogs_types_fight from "../warcraftlogs/types/fight.js";
import type * as warcraftlogs_types_guild from "../warcraftlogs/types/guild.js";
import type * as warcraftlogs_types_index from "../warcraftlogs/types/index.js";
import type * as warcraftlogs_types_owner from "../warcraftlogs/types/owner.js";
import type * as warcraftlogs_types_report from "../warcraftlogs/types/report.js";
import type * as warcraftlogs_types_server from "../warcraftlogs/types/server.js";
import type * as warcraftlogs_types_specRankingForEncounter from "../warcraftlogs/types/specRankingForEncounter.js";
import type * as warcraftlogs_types_zone from "../warcraftlogs/types/zone.js";
import type * as wclApi_auth_getAccessToken from "../wclApi/auth/getAccessToken.js";
import type * as wclApi_report_getRankerActions from "../wclApi/report/getRankerActions.js";
import type * as wclApi_report_getReportActors from "../wclApi/report/getReportActors.js";
import type * as wclApi_report_notableAbilityCasts from "../wclApi/report/notableAbilityCasts.js";
import type * as wclApi_specRanking_getSpecRankingForEncounter from "../wclApi/specRanking/getSpecRankingForEncounter.js";
import type * as wclApi_zones_consts from "../wclApi/zones/consts.js";
import type * as wclApi_zones_getZones from "../wclApi/zones/getZones.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "auth/createAccessToken": typeof auth_createAccessToken;
  "auth/replaceAccessToken": typeof auth_replaceAccessToken;
  auth: typeof auth;
  http: typeof http;
  "schema/auth/accessTokens": typeof schema_auth_accessTokens;
  "schema/tasks/tasks": typeof schema_tasks_tasks;
  "schema/warcraftLogs/encounter": typeof schema_warcraftLogs_encounter;
  "schema/warcraftLogs/rankings": typeof schema_warcraftLogs_rankings;
  "schema/warcraftLogs/zone": typeof schema_warcraftLogs_zone;
  "warcraftlogs/actions/generateRankingDataForSpec": typeof warcraftlogs_actions_generateRankingDataForSpec;
  "warcraftlogs/actions/generateZonesAndEncounters": typeof warcraftlogs_actions_generateZonesAndEncounters;
  "warcraftlogs/actions/index": typeof warcraftlogs_actions_index;
  "warcraftlogs/actions": typeof warcraftlogs_actions;
  "warcraftlogs/convexTypes/className": typeof warcraftlogs_convexTypes_className;
  "warcraftlogs/convexTypes/specName": typeof warcraftlogs_convexTypes_specName;
  "warcraftlogs/convexTypes/zoneWithEncounter": typeof warcraftlogs_convexTypes_zoneWithEncounter;
  "warcraftlogs/mutations/createZoneWithEncounters": typeof warcraftlogs_mutations_createZoneWithEncounters;
  "warcraftlogs/mutations/index": typeof warcraftlogs_mutations_index;
  "warcraftlogs/mutations/ranking": typeof warcraftlogs_mutations_ranking;
  "warcraftlogs/mutations": typeof warcraftlogs_mutations;
  "warcraftlogs/queries/getRankingsForEncounter": typeof warcraftlogs_queries_getRankingsForEncounter;
  "warcraftlogs/queries/getZoneWithEncounters": typeof warcraftlogs_queries_getZoneWithEncounters;
  "warcraftlogs/queries/index": typeof warcraftlogs_queries_index;
  "warcraftlogs/queries": typeof warcraftlogs_queries;
  "warcraftlogs/types/actor": typeof warcraftlogs_types_actor;
  "warcraftlogs/types/consts": typeof warcraftlogs_types_consts;
  "warcraftlogs/types/encounter": typeof warcraftlogs_types_encounter;
  "warcraftlogs/types/fight": typeof warcraftlogs_types_fight;
  "warcraftlogs/types/guild": typeof warcraftlogs_types_guild;
  "warcraftlogs/types/index": typeof warcraftlogs_types_index;
  "warcraftlogs/types/owner": typeof warcraftlogs_types_owner;
  "warcraftlogs/types/report": typeof warcraftlogs_types_report;
  "warcraftlogs/types/server": typeof warcraftlogs_types_server;
  "warcraftlogs/types/specRankingForEncounter": typeof warcraftlogs_types_specRankingForEncounter;
  "warcraftlogs/types/zone": typeof warcraftlogs_types_zone;
  "wclApi/auth/getAccessToken": typeof wclApi_auth_getAccessToken;
  "wclApi/report/getRankerActions": typeof wclApi_report_getRankerActions;
  "wclApi/report/getReportActors": typeof wclApi_report_getReportActors;
  "wclApi/report/notableAbilityCasts": typeof wclApi_report_notableAbilityCasts;
  "wclApi/specRanking/getSpecRankingForEncounter": typeof wclApi_specRanking_getSpecRankingForEncounter;
  "wclApi/zones/consts": typeof wclApi_zones_consts;
  "wclApi/zones/getZones": typeof wclApi_zones_getZones;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
