type NumeralID = "I" | "V" | "X" | "L" | "C" | "D" | "M";

/*
  IX,
  VII,
  MCM,
  LXII,
*/

const KEY = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

export function getIntfromNumeral(roman: string): number {
  const criteria: RegExp = RegExp(/[I|V|X|L|C|D|M]/gm);

  if (criteria.test(roman)) {
    const split: NumeralID[] = roman.split("") as NumeralID[];
    let count: number = 0;

    for (let index = 0; index < split.length; index++) {
      const current: number = KEY[split[index]];
      const next: number = KEY[split[index + 1]];

      next && next > current ? (count -= current) : (count += current);
    }
    console.log(count);
    return count;
  }

  throw new Error(`Input: ${roman} was not a Roman numeral`);
}
