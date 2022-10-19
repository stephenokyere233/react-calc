import React from "react";
import Button from "./Button";
import Display from "./Display";
import { useState } from "react";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "+", "*", "-", "."];

  const showElement = (event) => {
    const { textContent } = event.target;
    setCalc(calc + textContent);
  };
  const calculate = (calc) => {
    let solution = eval(calc);
    setResult(!Number.isInteger(solution) ? solution.toFixed(3) : solution);
  };
  const clear = (calc) => {
    if (result === "") {
      setCalc(calc.slice(0, -1));
      return;
    }
    setCalc("");
    setResult("");
  };
  const negate = () => {
    setCalc((prevState) => `-(${prevState})`);
  };
  // const findPercent = () => {
  //   setCalc((prevState) => prevState / 100);
  // };
  const updateCalc = (value) => {
    if (ops.includes(value) && (calc === "" || ops.includes(calc.slice(-1)))) {
      // console.log(calc.slice(-1))
      return;
    }
    if (calc.includes(".")) {
      return;
    }
    setCalc(calc + value);
  };

  return (
    <>
      <Display span={result} screen={calc} />

      <div className="btns">
        <Button
          size="70px"
          color="gray"
          operator={"AC"}
          onClick={() => clear(calc)}
        />
        <Button size="70px" color="gray" operator={"+/-"} onClick={negate} />
        <Button size="70px" color="gray" operator={"%"} />
        <Button
          size="70px"
          color="orange"
          operator={"÷"}
          onClick={() => updateCalc("/")}
        />
        <Button size="70px" onClick={showElement} color="black" element={"7"} />
        <Button size="70px" onClick={showElement} color="black" element={"8"} />
        <Button size="70px" onClick={showElement} color="black" element={"9"} />
        <Button
          size="70px"
          color="orange"
          operator={"x"}
          onClick={() => updateCalc("*")}
        />
        <Button
          size="70px"
          onClick={showElement}
          // onKeypress={showElement}
          color="black"
          element={"4"}
        />
        <Button size="70px" onClick={showElement} color="black" element={"5"} />
        <Button size="70px" onClick={showElement} color="black" element={"6"} />
        <Button
          size="70px"
          color="orange"
          operator={"-"}
          onClick={() => updateCalc("-")}
        />
        <Button size="70px" onClick={showElement} color="black" element={"1"} />
        <Button size="70px" onClick={showElement} color="black" element={"2"} />
        <Button size="70px" onClick={showElement} color="black" element={"3"} />
        <Button
          size="70px"
          color="orange"
          operator={"+"}
          onClick={() => updateCalc("+")}
        />
        <Button
          size="160px"
          color="black"
          element={"0"}
          onClick={showElement}
        />
        <Button
          size="70px"
          color="black"
          operator={"."}
          onClick={() => updateCalc(".")}
        />
        <Button
          size="70px"
          color="orange"
          operator={"="}
          onClick={() => calculate(calc)}
        />
      </div>
    </>
  );
};

export default Calculator;
