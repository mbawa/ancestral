import { pgTable, serial } from "drizzle-orm/pg-core";

export const tools = pgTable("tools", {
  id: serial("id").primaryKey(),
});
