import { bgBlue, blue, bold } from "picocolors";
import { formatNestedMessages } from "./utils/formatNestedMessages";

export const info = (title: string, messages: string | (string | string[])[]) => {
  if (typeof messages === "string") {
    const info = `${bgBlue(bold(` ℹ️  ${title} `))} ${blue(messages)}`;

    return console.log(info);
  }

  let info = `${bgBlue(bold(" ℹ️  INFO "))} ${blue(title)}\n`;

  info += formatNestedMessages(messages);
  console.log(info);
};
