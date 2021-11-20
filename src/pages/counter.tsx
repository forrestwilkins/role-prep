// TODO: Remove or replace with actual feature. This is only a template.

import { useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../store/counter";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <>
      <h2>{count}</h2>

      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>

      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  );
};

export default Counter;
