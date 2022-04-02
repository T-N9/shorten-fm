import { createStore } from "redux";
import shortenReducer from "./reducers/ShortenReducer";

const store = createStore(shortenReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;