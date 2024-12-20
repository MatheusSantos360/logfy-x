import { formatMessage } from "./formatMessage";
import { logfyxColors } from "./logfyxColors";

export const formatNestedMessages = (messages: (string | string[])[], level: number = 0, color: keyof typeof logfyxColors): string => {
  let formattedMessages = "";

  messages.forEach((msg) => {
    if (typeof msg === "string") {
      formattedMessages += formatMessage(msg, level, color);
    } else if (Array.isArray(msg)) {
      formattedMessages += formatNestedMessages(msg, level + 1, color);
    }
  });
  return formattedMessages;
};
