import { numberToBLR } from "../../../src/utils/helper";

describe("Should test helpers", () => {
  it("should test numberToBLR", () => {
    expect(numberToBLR(20.15)).toBe("R$ 20,15");
  });

  it("should test numberToBLR when input is null", () => {
    expect(numberToBLR(null)).toBe("R$ 0,00");
  });
});
