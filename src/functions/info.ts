import { bgBlue, blue, bold } from "picocolors";
import { formatNestedMessages } from "./utils/formatNestedMessages";

export const info = (title: string, messages: (string | string[])[]) => {
  let info = `${bgBlue(bold(" ℹ️  INFO "))} ${blue(title)}\n`;

  info += formatNestedMessages(messages);
  console.log(info);
};
