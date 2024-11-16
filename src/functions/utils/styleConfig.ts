import { config, styleProps } from "../../types/logfy-x-config.types";
import { getNestedValue } from "./getNestedValue";

export const styleConfig = (config: config): string => {
  let styles: string = "";

  styleProps.forEach((styleProp) => {
    const props = styleProp.split(".");

    const value = getNestedValue(config, props);

    if (value !== undefined && value !== null) {
      styles += `${value} `;
    }
  });

  return styles.trim();
};

// test
