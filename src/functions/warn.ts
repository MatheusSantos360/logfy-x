import { bold } from "picocolors";
import { formatNestedMessages } from "./utils/formatNestedMessages";
import { logfyxColors } from "./utils/logfyxColors";

/**
 * Logs formatted warning messages to the console.
 * @param {string} title - The title of the warning message.
 * @param {string | (string | string[])[]} messages - The message or array of messages.
 * @example
 * // Log a simple warning message
 * warn("Caution", "This action is risky.");
 *
 * @example
 * // Log nested warning messages
 * warn("Caution", [
 *   "This action is risky.",
 *   ["Step 1: Proceed with care", "Step 2: Verify settings"],
 *   "Final step: Confirm changes"
 * ]);
 */
export const warn = (title: string, messages: string | (string | string[])[]) => {
  if (typeof messages === "string") {
    const info = `${logfyxColors.bgOrange(bold(` ⚠️  ${title} `))} ${logfyxColors.orange(messages)}`;

    return console.log(info);
  }

  let warn = `${logfyxColors.bgOrange(bold(" ⚠️  WARN "))} ${logfyxColors.orange(title)}\n`;

  warn += formatNestedMessages(messages);
  console.log(warn);
};
