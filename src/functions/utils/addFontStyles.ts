import picocolors from "picocolors";

// eslint-disable-next-line
export function addFontStyles(styles: string[], content: any) {
  const fontStyles = styles.filter((style) => !style.startsWith("bg"));

  fontStyles.forEach((style) => {
    const styleFunction = picocolors[style as keyof typeof picocolors];
    
    if (typeof styleFunction === "function") {
      content = styleFunction(content);
    }
  });

  return content;
}

