import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducer from "./reducer";
import randomReducer from "./randomReducer";

const store = createStore(combineReducers({ reducer, randomReducer }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
