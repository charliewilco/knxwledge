interface IReport {
  [key: string]: number;
}

export function charFreq(sentence: string): IReport {
  const letter = /^[A-Za-z]*$/;

  let map: IReport = {};

  for (let char of sentence) {
    if (letter.test(char)) {
      const lower = char.toLowerCase();
      if (map[lower]) {
        map[lower]++;
      } else {
        map[lower] = 1;
      }
    }
  }

  return map;
}
