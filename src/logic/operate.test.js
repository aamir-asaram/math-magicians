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

describe("operate_decimal", () => {
  it("add_to_decimal_numbers", () => {
    expect(operate(2.3, 3.1, "+")).toBe("5.4");
  });
  it("subtract_to_decimal_numbers", () => {
    expect(operate(5.3, 3.1, "-")).toBe("2.2");
  });
  it("multiply_to_decimal_numbers", () => {
    expect(operate(2.3, 3.1, "x")).toBe("7.13");
  });
  it("divide_to_decimal_numbers", () => {
    expect(operate(4.2, 2.0, "÷")).toBe("2.1");
  });
  it("division_by_zero", () => {
    expect(operate(4.2, 0, "÷")).toBe("Can't divide by 0.");
  });
});