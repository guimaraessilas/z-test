import { createStore } from "redux";
import amountReducer from "./reducers";

const store = createStore(amountReducer);

export default store;
