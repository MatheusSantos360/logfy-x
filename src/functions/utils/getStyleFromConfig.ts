import { config, styleProps } from "../../types/logfy-x-config.types";
import { getNestedValue } from "./getNestedValue";

export const getStyleFromConfig = (config: config): string[] => {
  const styles: string[] = [];

  styleProps.forEach((styleProp) => {
    const props = styleProp.split(".");

    const value = getNestedValue(config, props);

    if (value !== undefined && value !== null) {
      styles.push(value);
    }
  });

  return styles
};
