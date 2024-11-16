import pico from "picocolors";
import { getConfig } from "../cli/functions/logfy-config";
import { options } from "../types/logfy.types";
import { styleConfig } from "./utils/styleConfig";
import toCamelCase from "./utils/toCamelCase";

/**
 * Formats and logs the content with optional styles.
 *
 * @param {any} content - The content to be logged.
 * @param {options} [options] - Optional settings for the log output, including style.
 * @returns {void}
 *
 * @example
 * // Log to the console with the default styles specified in `logfy-x.json`
 * logfy("My content");
 *
 * @example
 * // Log to the console with the default styles and additional custom styles
 * // ⚠️ Note: The styles provided in the options can overwrite the default styles.
 * logfy("My content", { style: "white bg-blue bold" });
 *
 * @example
 * // Log to the console with the default styles "red" and "bold" removed
 * logfy("My content", { style: "-red -bold" });
 */
// eslint-disable-next-line
const logfy = (content: any, options?: options): void => {
  const config = getConfig();
  const configStyles = styleConfig(config);

  let styles: string[] = [...configStyles.split(" ")];

  styles = styles.filter((style) => style !== "none");

  if (options?.style) {
    const style = options.style.split(" ");

    style.forEach((styleItem) => {
      if (styleItem.startsWith("-")) {
        const styleToRemove = toCamelCase(styleItem.substring(1));
        styles = styles.filter((s) => toCamelCase(s) !== styleToRemove);
      }
    });

    style.forEach((styleItem) => {
      if (!styleItem.startsWith("-")) {
        const convertedStyle = toCamelCase(styleItem);
        styles.push(convertedStyle);
      }
    });
  }

  const uppercase = /^[A-Z]/;

  styles = styles.filter((style) => !style.match(uppercase));
  styles.reverse();

  let newContent = content;

  const otherStyles = styles.filter((style) => !style.startsWith("bg"));
  otherStyles.forEach((style) => {
    const styleFunction = pico[style as keyof typeof pico];
    if (styleFunction && typeof styleFunction === "function") {
      newContent = styleFunction(newContent);
    }
  });

  const bgStyles = styles.filter((style) => style.startsWith("bg"));
  bgStyles.forEach((style) => {
    const styleFunction = pico[style as keyof typeof pico];
    if (styleFunction && typeof styleFunction === "function") {
      newContent = styleFunction(newContent);
    }
  });
  
  console.log(newContent);
};

export default logfy;
