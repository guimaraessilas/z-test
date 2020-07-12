export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";
export const CLEAN_STORE = "CLEAN_STORE";

export function add(price) {
  return {
    type: INCREMENT,
    payload: price,
  };
}

export function remove(price) {
  return {
    type: DECREMENT,
    payload: price,
  };
}

export function cleanStore(){
  return {
    type: CLEAN_STORE
  }
}
