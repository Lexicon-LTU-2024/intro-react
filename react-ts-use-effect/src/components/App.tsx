import { useEffect, useState } from "react";

export function App() {
  const [counter, setCounter] = useState<number>(0);

  // This useEffect only runs when the component is rendered the first time. A good time to maybe fetch some resources..
  useEffect(() => {
    console.log("App component rendered first time");
  }, []);

  // This useEffect runs on the FIRST render and every time the counter variable is updated. Think of it as a listener on one or more variables.
  useEffect(() => {
    console.log("App component rerendered due to update in a useState => counter");
  }, [counter]);

  return (
    <fieldset className="app">
      <legend>App Component</legend>
      <div className="counter">
        <p>Counter</p>
        <p className="count">{counter}</p>
        <button onClick={() => setCounter((prev) => (prev += 1))}>Increment</button>
        <button onClick={() => setCounter((prev) => (prev -= 1))}>Decrement</button>
      </div>
    </fieldset>
  );
}
