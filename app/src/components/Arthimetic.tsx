import React, { useState } from "react";

interface forinput {
  num1: number | undefined;
  num2: number | undefined;
}
function Arthimetic() {
  let [input, setInput] = useState<forinput>({
    num1: undefined,
    num2: undefined,
  });
  let [result, setResult] = useState(0);

  let addClick = function () {
    let { num1, num2 } = input;
    setResult(Number(num1) + Number(num2));
  };
  let subtract = function () {
    let { num1, num2 } = input;
    setResult(Number(num1) - Number(num2));
  };
  let multiply = function () {
    let { num1, num2 } = input;
    setResult(Number(num1) * Number(num2));
  };
  let divide = function () {
    let { num1, num2 } = input;
    setResult(Number(num1) / Number(num2));
  };
  let handleInput = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1>Arthmetic operations</h1>
      <input
        className="inputs"
        onChange={handleInput}
        name="num1"
        value={input.num1}
        type="number"
      ></input>
      <input
        className="inputs"
        onChange={handleInput}
        name="num2"
        value={input.num2}
        type="number"
      ></input>{" "}
      <br />
      <button className="btn" onClick={addClick}>
        +
      </button>
      <button className="btn" onClick={subtract}>
        -
      </button>
      <button className="btn" onClick={multiply}>
        *
      </button>
      <button className="btn" onClick={divide}>
        /
      </button>{" "}
      <br />
      <span>{result}</span>
    </div>
  );
}

export default Arthimetic;
