import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from "./store/counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState(2);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        style={{ margin: 10 }}
      >
        +
      </button>
      {count}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        style={{ margin: 10 }}
      >
        -
      </button>
      <div>
        <button
          onClick={() => {
            dispatch(incrementByAmount(amount));
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            dispatch(incrementAsync(amount));
          }}
        >
          add async
        </button>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default Counter;
