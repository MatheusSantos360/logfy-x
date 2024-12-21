import { bgGreen, bold, green } from "picocolors";
import { formatNestedMessages } from "./utils/formatNestedMessages";

/**
 * Logs formatted success messages to the console.
 * @param {string} title - The title of the success message.
 * @param {string | (string | string[])[]} messages - The message or array of messages.
 * @example
 * // Log a simple success message
 * success("Success", "Operation completed successfully.");
 *
 * @example
 * // Log nested success messages
 * success("Success", [
 *   "Operation completed successfully.",
 *   ["Step 1: Verify the outcome", "Step 2: Celebrate the achievement"],
 *   "Final step: Document the process"
 * ]);
 */
export const success = (title: string, messages: string | (string | string[])[]) => {
  if (typeof messages === "string") {
    const successMessage = `${bgGreen(bold(` ✅ ${title} `))} ${green(messages)}`;

    return console.log(successMessage);
  }

  let successMessage = `${bgGreen(bold(" ✅ SUCCESS "))} ${green(title)}\n`;

  successMessage += formatNestedMessages(messages, 0, "green");
  console.log(successMessage);
};
