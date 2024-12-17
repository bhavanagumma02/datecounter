import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("15 december 2024");
  date.setDate(date.getDate() + count);

  function incre() {
    setStep(step + 1);
  }
  function decre() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  function increment() {
    setCount(count + step);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - step);
    }
  }

  return (
    <div>
      <button onClick={decre}>decr</button>
      <span>step: {step}</span>
      <button onClick={incre}>incr</button>
      <br />

      <button onClick={decrement}>decr</button>
      <span>Count: {count}</span>
      <button onClick={increment}>incr</button>

      <p>
        {" "}
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
export default Counter;
