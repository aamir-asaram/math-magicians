import operate from "./operate";

describe("operate", () => {
  it("adds two numbers", () => {
    expect(operate(5, 6, "+")).toBe("11");
  });

  it("subtracts two numbers", () => {
    expect(operate(5, 6, "-")).toBe("-1");
  });

  it("multiplies two numbers", () => {
    expect(operate(5, 6, "x")).toBe("30");
  });

  it("divides two numbers", () => {
    expect(operate(9, 3, "÷")).toBe("3");
  });

});