import { ReactElement, useEffect, useState } from "react";

interface IInputProps {
  counter: number;
}

export function Input({ counter }: IInputProps): ReactElement {
  const [value, setValue] = useState<string>("");

  // useEffect(() => {
  //   console.log("Input component rendered first time");
  // }, []);

  // useEffect(() => {
  //   console.log("Input component rerendered due to update in a useState => value");
  // }, [value]);

  // useEffect(() => {
  //   console.log("Input component rerendered due to props change => counter");
  // }, [counter]);

  return (
    <fieldset className="input">
      <legend>Input Component</legend>
      <label className="label" htmlFor="name">
        Name
      </label>
      <input type="text" id="name" onChange={(e) => setValue(e.target.value)} value={value} />
      <div className="counter">
        <p>Counter:</p>
        <p>{counter}</p>
      </div>
    </fieldset>
  );
}
