import picocolors from "picocolors";

// eslint-disable-next-line
export function addBgStyles(styles: string[], content: any) {
  const bgStyles = styles.filter((style) => style.startsWith("bg"));
  bgStyles.forEach((style) => {
    const styleFunction = picocolors[style as keyof typeof picocolors];
    if (styleFunction && typeof styleFunction === "function") {
      content = styleFunction(content);
    }
  });

  return content;
}

// test
