import calculate from "./calculate";

let state;

beforeEach(() => {
  state = {
    total: null,
    next: null,
    operation: null,
  };
});

describe("calculate", () => {
  it("numbers should update next", () => {
    state = calculate(state, "5");
    state = calculate(state, "6");
    expect(state.next).toBe("56");
  });

  it("function keys should update operation", () => {
    state = calculate(state, "+");
    expect(state.operation).toBe("+");
  });

  it("AC should clear state", () => {
    state = calculate(state, "5");
    state = calculate(state, "AC");
    expect(state).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it("= should update total", () => {
    state = calculate(state, "5");
    state = calculate(state, "+");
    state = calculate(state, "6");
    state = calculate(state, "=");
    expect(state.total).toBe("11");
  });
});


