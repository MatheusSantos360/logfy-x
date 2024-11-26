import picocolors from "picocolors";
type input = string | number | null | undefined;

export const logfyxColors = {
  purple: (input: input) => `\u001b[38;2;128;0;128m${input}\u001b[0m`,
  bgPurple: (input: input) => `\u001b[48;2;128;0;128m${input}\u001b[0m`,

  pink: (input: input) => `\u001b[38;2;255;105;180m${input}\u001b[0m`,
  bgPink: (input: input) => `\u001b[48;2;255;105;180m${input}\u001b[0m`,

  orange: (input: input) => `\u001b[38;2;255;165;0m${input}\u001b[0m`,
  bgOrange: (input: input) => `\u001b[48;2;255;165;0m${input}\u001b[0m`,

  ...picocolors,
};
