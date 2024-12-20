import { bgBlue, blue, bold } from "picocolors";
import { formatNestedMessages } from "./utils/formatNestedMessages";

/**
 * Logs formatted informational messages to the console.
 * @param {string} title - The title of the information message.
 * @param {string | (string | string[])[]} messages - The message or array of messages.
 * @example
 * // Log a simple message
 * info("Update", "The process was successful.");
 *
 * @example
 * // Log nested messages
 * info("Update", [
 *   "The process was successful.",
 *   ["Step 1: Completed", "Step 2: Completed"],
 *   "Final step: Completed"
 * ]);
 */
export const info = (title: string, messages: string | (string | string[])[]) => {
  if (typeof messages === "string") {
    const info = `${bgBlue(bold(` ℹ️  ${title} `))} ${blue(messages)}`;

    return console.log(info);
  }

  let info = `${bgBlue(bold(" ℹ️  INFO "))} ${blue(title)}\n`;

  info += formatNestedMessages(messages, 0, "blue");
  console.log(info);
};
