import { z } from 'zod';

export interface config {}

const theme = z.object({
  color: z.string(),
  background: z.string(),
});

export const configSchema = z.object({
  theme,
});
