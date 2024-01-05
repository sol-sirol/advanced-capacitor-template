/**
 * функция для выбора нужного сколнения слова на основе переданного значения
 * @param n - значение, относительно которого нужно склонять слово
 * @param textForms - склонения слова - 1, 2, 5 - [человек, человека, человек]
 * @returns
 */
export const num2str = (n: number, textForms: string[]) => {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForms[1];
  }
  if (n1 === 1) {
    return textForms[0];
  }
  return textForms[2];
};
