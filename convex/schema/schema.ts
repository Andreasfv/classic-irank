import { defineSchema } from "convex/server";
import tasks from "./tasks/tasks";

const schema = defineSchema({
    tasks: tasks,
})

export default schema