import picocolors from "picocolors";

export function addFontStyles(styles: string[], content: any) {
  const fontStyles = styles.filter((style) => !style.startsWith("bg"));

  fontStyles.forEach((style) => {
    const styleFunction = picocolors[style as keyof typeof picocolors];
    if (styleFunction && typeof styleFunction === "function") {
      content = styleFunction(content);
    }
  });

  return content;
}
