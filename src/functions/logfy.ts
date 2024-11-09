import { options } from "../types/logfy.types";
import pico from "picocolors";
import toCamelCase from "./utils/toCamelCase";

// eslint-disable-next-line
const logfy = (content: any, options?: options): void => {
  if (options?.style) {
    const style = options.style.split(" ");
    const styles: string[] = [];

    for (let i = 0; i < style.length; i++) {
      const convertedStyle = toCamelCase(style[i]!);
      if (convertedStyle !== undefined) {
        styles.push(convertedStyle);
      }
    }

    let newContent = content;

    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i]?.startsWith("bg")) {
        continue;
      }
      const styleFunction = pico[styles[i] as keyof typeof pico];
      if (styleFunction && typeof styleFunction === 'function') {
        newContent = styleFunction(newContent);
      }
    }

    // Apply background colors next
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && !styles[i]?.startsWith("bg")) {
        continue;
      }
      const styleFunction = pico[styles[i] as keyof typeof pico];
      if (styleFunction && typeof styleFunction === 'function') {
        newContent = styleFunction(newContent);
      }
    }

    console.log(newContent);
  } else {
    console.log(content);
  }
};

export default logfy;