// eslint-disable-next-line
export function getNestedValue(obj: any, keys: string[]): any {
  return keys.reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, obj);
}
