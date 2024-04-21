import { incre, decre } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

import React from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <section>
        <p>{count}</p>
      </section>
      <button onClick={() => dispatch(incre())}>+</button>
      <button onClick={() => dispatch(decre())}>-</button>
    </div>
  );
};

export default Counter;
