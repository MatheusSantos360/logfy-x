import { z } from "zod";

export type config = z.infer<typeof configSchema>;

export const configSchema = z.object({
  styles: z.string(),
});
