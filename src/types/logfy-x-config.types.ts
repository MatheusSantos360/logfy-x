import { z } from "zod";

export type config = z.infer<typeof configSchema>;

const theme = z.object({
  color: z.string(),
  background: z.string(),
  font: z.string(),
});

export const configSchema = z.object({
  theme,
});

export const styleProps: string[] = ["theme.color", "theme.background", "theme.font"];
