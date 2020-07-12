import { INCREMENT, DECREMENT, CLEAN_STORE } from "./actions";

const amountReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;

    case DECREMENT:
      return state - action.payload;

    case CLEAN_STORE:
      return state - state;

    default:
      return state;
  }
};

export default amountReducer;
