import { logfyxColors } from "./logfyxColors";

type LogfyxColorFunction = (input: string) => string;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const callableLogfyxColors: { [K in keyof typeof logfyxColors]: LogfyxColorFunction } = logfyxColors as any;

export const formatMessage = (message: string, level: number = 0, color: keyof typeof callableLogfyxColors): string => {
  const indentation = "  ".repeat(level);

  return `${indentation}${callableLogfyxColors[color](">")} ${message}\n`;
};
