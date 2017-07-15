import { randomBytes } from "crypto";

import { Options } from "../types/Options";

export function generateString(options: Options): string {
  const { includes, maxLength } = options;
  const candidates = includes.reduce((x, y) => x + y);
  const rand = randomBytes(maxLength);
  return Array.from(rand).map(x => candidates[x % candidates.length]).join("");
}
