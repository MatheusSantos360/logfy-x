import { bgRed, red, bold } from "picocolors";
import { formatNestedMessages } from "./utils/formatNestedMessages";

/**
 * Logs formatted error messages to the console.
 * @param {string} title - The title of the error message.
 * @param {string | (string | string[])[]} messages - The message or array of messages.
 * @example
 * // Log a simple error message
 * error("Error", "An unexpected error occurred.");
 *
 * @example
 * // Log nested error messages
 * error("Error", [
 *   "An unexpected error occurred.",
 *   ["Step 1: Check the logs", "Step 2: Restart the application"],
 *   "Final step: Contact support"
 * ]);
 */
export const error = (title: string, messages: string | (string | string[])[]) => {
  if (typeof messages === "string") {
    const errorMessage = `${bgRed(bold(` ❌ ${title} `))} ${red(messages)}`;

    return console.log(errorMessage);
  }

  let errorMessage = `${bgRed(bold(" ❌ ERROR "))} ${red(title)}\n`;

  errorMessage += formatNestedMessages(messages, 0, "red");
  console.log(errorMessage);
};
