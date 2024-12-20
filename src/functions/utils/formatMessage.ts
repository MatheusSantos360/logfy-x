import { blue } from "picocolors";

export const formatMessage = (message: string, level: number = 0): string => {
  const indentation = "  ".repeat(level);

  return `${indentation}${blue(">")} ${message}\n`;
};
