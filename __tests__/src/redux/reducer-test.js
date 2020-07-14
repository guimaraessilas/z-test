import amountReducer from "../../../src/redux/reducers";
import { INCREMENT, DECREMENT, CLEAN_STORE } from "../../../src/redux/actions";

describe("Should test amountReducer", () => {
  it("Should handle with INCREMENT", () => {
    const price = Math.random();
    expect(
      amountReducer(0, {
        type: INCREMENT,
        payload: price,
      })
    ).toEqual(price);
  });

  it("should handle with DECREMENT", () => {
    expect(
      amountReducer(25, {
        type: DECREMENT,
        payload: 10,
      })
    ).toEqual(15);
  });

  it("should handle with CLEN_STORE", () => {
    expect(
      amountReducer(10, {
        type: CLEAN_STORE,
      })
    ).toEqual(0);
  });

  it("should handle with unknow action type ", () => {
    expect(
      amountReducer(0, {
        type: "",
      })
    ).toEqual(0);
  });
});
