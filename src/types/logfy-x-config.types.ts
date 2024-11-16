import { z } from "zod";

export type config = z.infer<typeof configSchema>;

const theme = z.object({
  color: z.string(),
  background: z.string(),
});

export const configSchema = z.object({
  theme,
});
