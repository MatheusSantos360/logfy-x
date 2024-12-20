import { formatMessage } from "./formatMessage";

export const formatNestedMessages = (messages: (string | string[])[], level: number = 0): string => {
  let formattedMessages = "";

  messages.forEach((msg) => {
    if (typeof msg === "string") {
      formattedMessages += formatMessage(msg, level, "orange");
    } else if (Array.isArray(msg)) {
      formattedMessages += formatNestedMessages(msg, level + 1);
    }
  });
  return formattedMessages;
};
