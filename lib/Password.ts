import { randomBytes } from "crypto";

export function generateString(options: Options): string {
  const { includes, maxLength } = options;
  const candidates = includes.reduce((x, y) => x + y);
  const rand = randomBytes(maxLength);
  return Array.from(rand)
    .map((x) => candidates[x % candidates.length])
    .join("");
}

export enum Presets {
  Numbers = "0123456789",
  LowerAlphabets = "abcdefghijklmnopqrstuvwxyz",
  UpperAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}

export interface Options {
  includes: string[];
  maxLength: number;
}
