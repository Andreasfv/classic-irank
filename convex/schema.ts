import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import tasks from "./schema/tasks/tasks";
import accessTokens from "./schema/auth/accessTokens";
 
const schema = defineSchema({
  ...authTables,
  tasks: tasks,
  accessTokens: accessTokens
  // Your other tables...
});
 
export default schema;