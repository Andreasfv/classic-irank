import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import tasks from "./schema/tasks/tasks";
import accessTokens from "./schema/auth/accessTokens";
import rankings from "./schema/warcraftLogs/rankings";

const schema = defineSchema({
  ...authTables,
  tasks: tasks,
  accessTokens: accessTokens,
  rankings: rankings,
  // Your other tables...
});

export default schema;
