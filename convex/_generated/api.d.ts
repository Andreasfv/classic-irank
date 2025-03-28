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
import type * as schema_rankings_rankings from "../schema/rankings/rankings.js";
import type * as schema_tasks_tasks from "../schema/tasks/tasks.js";
import type * as task_createTask from "../task/createTask.js";
import type * as task_getTasks from "../task/getTasks.js";
import type * as warcraftlogs_auth_getAccessToken from "../warcraftlogs/auth/getAccessToken.js";
import type * as warcraftlogs_convexTypes_className from "../warcraftlogs/convexTypes/className.js";
import type * as warcraftlogs_convexTypes_specName from "../warcraftlogs/convexTypes/specName.js";
import type * as warcraftlogs_report_getRankerActions from "../warcraftlogs/report/getRankerActions.js";
import type * as warcraftlogs_report_getReportActors from "../warcraftlogs/report/getReportActors.js";
import type * as warcraftlogs_report_notableAbilityCasts from "../warcraftlogs/report/notableAbilityCasts.js";
import type * as warcraftlogs_specRanking_createRankingEntry from "../warcraftlogs/specRanking/createRankingEntry.js";
import type * as warcraftlogs_specRanking_generateRankingDataForSpec from "../warcraftlogs/specRanking/generateRankingDataForSpec.js";
import type * as warcraftlogs_specRanking_getSpecRankingForEncounter from "../warcraftlogs/specRanking/getSpecRankingForEncounter.js";
import type * as warcraftlogs_types_actor from "../warcraftlogs/types/actor.js";
import type * as warcraftlogs_types_consts from "../warcraftlogs/types/consts.js";
import type * as warcraftlogs_types_fight from "../warcraftlogs/types/fight.js";
import type * as warcraftlogs_types_guild from "../warcraftlogs/types/guild.js";
import type * as warcraftlogs_types_index from "../warcraftlogs/types/index.js";
import type * as warcraftlogs_types_owner from "../warcraftlogs/types/owner.js";
import type * as warcraftlogs_types_report from "../warcraftlogs/types/report.js";
import type * as warcraftlogs_types_server from "../warcraftlogs/types/server.js";
import type * as warcraftlogs_types_specRankingForEncounter from "../warcraftlogs/types/specRankingForEncounter.js";
import type * as warcraftlogs_types_zone from "../warcraftlogs/types/zone.js";

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
  "schema/rankings/rankings": typeof schema_rankings_rankings;
  "schema/tasks/tasks": typeof schema_tasks_tasks;
  "task/createTask": typeof task_createTask;
  "task/getTasks": typeof task_getTasks;
  "warcraftlogs/auth/getAccessToken": typeof warcraftlogs_auth_getAccessToken;
  "warcraftlogs/convexTypes/className": typeof warcraftlogs_convexTypes_className;
  "warcraftlogs/convexTypes/specName": typeof warcraftlogs_convexTypes_specName;
  "warcraftlogs/report/getRankerActions": typeof warcraftlogs_report_getRankerActions;
  "warcraftlogs/report/getReportActors": typeof warcraftlogs_report_getReportActors;
  "warcraftlogs/report/notableAbilityCasts": typeof warcraftlogs_report_notableAbilityCasts;
  "warcraftlogs/specRanking/createRankingEntry": typeof warcraftlogs_specRanking_createRankingEntry;
  "warcraftlogs/specRanking/generateRankingDataForSpec": typeof warcraftlogs_specRanking_generateRankingDataForSpec;
  "warcraftlogs/specRanking/getSpecRankingForEncounter": typeof warcraftlogs_specRanking_getSpecRankingForEncounter;
  "warcraftlogs/types/actor": typeof warcraftlogs_types_actor;
  "warcraftlogs/types/consts": typeof warcraftlogs_types_consts;
  "warcraftlogs/types/fight": typeof warcraftlogs_types_fight;
  "warcraftlogs/types/guild": typeof warcraftlogs_types_guild;
  "warcraftlogs/types/index": typeof warcraftlogs_types_index;
  "warcraftlogs/types/owner": typeof warcraftlogs_types_owner;
  "warcraftlogs/types/report": typeof warcraftlogs_types_report;
  "warcraftlogs/types/server": typeof warcraftlogs_types_server;
  "warcraftlogs/types/specRankingForEncounter": typeof warcraftlogs_types_specRankingForEncounter;
  "warcraftlogs/types/zone": typeof warcraftlogs_types_zone;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
