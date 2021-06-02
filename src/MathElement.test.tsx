import { expect } from "@jest/globals";
import { MathElement } from "./MathElement";

describe("MathElement", () => {
  it("has a name", () => {
    expect(MathElement.name).toBe("MathElement");
  });
});
