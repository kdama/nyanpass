import { generateString } from "./Password";

describe("Password", () => {
  describe("#generateString", () => {
    it("generate a string whose length is equal or shorter than max length", () => {
      const testsMaxLength = [0, 1, 2, 4, 8, 16, 100];
      const testsIncludes = [["abcde"], ["0123456789"], ["世界", "+-*/"]];
      testsIncludes.forEach((includes) => {
        testsMaxLength.forEach((maxLength) => {
          const actual = generateString({ includes, maxLength });
          expect(actual.length).toBeLessThanOrEqual(maxLength);
        });
      });
    });
  });
});
