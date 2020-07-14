import {
  CLEAN_STORE,
  INCREMENT,
  DECREMENT,
  add,
  remove,
  cleanStore,
} from "../../../src/redux/actions";

describe("Should test redux actions", () => {
  it("validate constants", () => {
    expect(CLEAN_STORE).toEqual("CLEAN_STORE");
    expect(INCREMENT).toEqual("INCREMENT");
    expect(DECREMENT).toEqual("DECREMENT");
  });

  it("should add store", () => {
    const price = Math.random();
    expect(add(price)).toEqual({ type: INCREMENT, payload: price });
  });

  it("should remove store", () => {
    const price = Math.random();
    expect(remove(price)).toEqual({ type: DECREMENT, payload: price });
  });

  it("should clean store", () => {
    expect(cleanStore()).toStrictEqual({ type: CLEAN_STORE });
  });
});
