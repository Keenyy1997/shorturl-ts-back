export function ReplaceSpaces(str: string, replaceString: string) {
  return str.trim().replace(/ /gi, replaceString);
}
