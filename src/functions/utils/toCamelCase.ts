export default function toCamelCase(string: string) {
  return string.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

// test
