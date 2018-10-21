import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./styles.css";

//This is the one and only reducer that our Redux Store will have:
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
let store = createStore(counter);

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <h3>Hello! This is a very basic counter with React and Redux</h3>
      <h2>{value}</h2>
      <button onClick={onIncrement}>Increment!</button>
      <button onClick={onDecrement}>Decrement!</button>
    </div>
  );
};

const handleClickIncrement = () => {
  store.dispatch({ type: "INCREMENT" });
  console.log(store.getState());
};
const handleClickDecrement = () => {
  store.dispatch({ type: "DECREMENT" });
  console.log(store.getState());
};

const rootElement = document.getElementById("root");
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={handleClickIncrement}
      onDecrement={handleClickDecrement}
    />,
    rootElement
  );
};
//Without subscribe method our UI would not reflect the changes on the State
store.subscribe(render);
render();
