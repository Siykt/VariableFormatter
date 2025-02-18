/** 判断当前单词是否是驼峰格式 */
export function isCamelCase(word: string): boolean {
  const regex = /^[a-zA-Z][a-zA-Z0-9]*$/;
  return regex.test(word) && isMixedCase(word);
}

/** 判断当前单词是否是大驼峰 */
export function isUpperCamelCase(word: string): boolean {
  const regex = /^[A-Z][a-zA-Z0-9]*$/;
  return regex.test(word) && isMixedCase(word);
}

/** 判断当前单词是否是小驼峰 */
export function isLowerCamelCase(word: string): boolean {
  const regex = /^[a-z][A-Za-z0-9]*$/;
  return regex.test(word) && isMixedCase(word);
}

/** 判断当前选中字符是否纯空格 */
export function isSpace(text: string): boolean {
  return /^\s*$/.test(text);
}

/** 判断是否同时存在大写字母和小写字母 */
export function isMixedCase(word: string): boolean {
  const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  return regex.test(word);
}
