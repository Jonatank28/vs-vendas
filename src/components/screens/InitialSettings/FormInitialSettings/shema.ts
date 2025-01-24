import { z } from "zod";

export const schema = z.object({
  server: z.string().max(100, "Server must have at most 100 characters").trim(),
  route: z.string().max(100, "Route must have at most 100 characters").trim(),
});
