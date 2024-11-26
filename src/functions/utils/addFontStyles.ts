import { logfyxColors } from "./logfyxColors";

// eslint-disable-next-line
export function addFontStyles(styles: string[], content: any) {
  const fontStyles = styles.filter((style) => !style.startsWith("bg"));

  fontStyles.forEach((style) => {
    const styleFunction = logfyxColors[style as keyof typeof logfyxColors];
    
    if (typeof styleFunction === "function") {
      content = styleFunction(content);
    }
  });

  return content;
}

