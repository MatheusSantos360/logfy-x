import { logfyxColors } from "./logfyxColors";

// eslint-disable-next-line
export function addBgStyles(styles: string[], content: any) {
  const bgStyles = styles.filter((style) => style.startsWith("bg"));
  
  bgStyles.forEach((style) => {
    const styleFunction = logfyxColors[style as keyof typeof logfyxColors];

    if (typeof styleFunction === "function") {
      content = styleFunction(content);
    }
  });

  return content;
}
