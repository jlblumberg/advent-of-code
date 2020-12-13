export const one = (input: string): number => {
  const numbers = input.split("\n").map((string) => parseInt(string));
  for (let i = 0; i <= numbers.length; i++) {
    const partOneOf2020 = 2020 - numbers[i];
    const partTwoOf2020 = numbers.filter((x) => x === partOneOf2020);
    return partTwoOf2020.length === 1 ? numbers[i] * partTwoOf2020[0] : null;
  }
};
