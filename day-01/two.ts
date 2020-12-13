export const two = (input: string): number => {
  const numbers = input.split("\n").map((string) => parseInt(string));
  for (let i = 0; i < numbers.length; i++) {
    const first = numbers[i];

    for (let j = 0; j < numbers.length; j++) {
      const second = numbers[j];

      for (let k = 0; k < numbers.length; k++) {
        const third = numbers[k];

        if (first + second + third === 2020) {
          return first * second * third;
        }
      }
    }
  }
};
