import React, { useState } from "react";
import { CalculatorStyle } from "../../../styles/tools/CalculatorStyle";
import Buttons from "./Buttons";
import Input from "./Input";
import Result from "./Result";

const initialVal = {
  input: "0",
  result: "0",
  lastValue: "0",
  lastClicked: "",
};

const CalculatorApp = () => {
  const [inputState, setInputState] = useState(initialVal.input),
    [resultState, setResultState] = useState(initialVal.result),
    [lastClickedState, setLastClickedState] = useState(initialVal.lastClicked),
    [lastValueState, setLastValueState] = useState(initialVal.lastValue),
    handleInput = inputState,
    handleResult = resultState;

  const isOperator = /[*/+-]/,
    endsWithOperator = /[*+-/]$/,
    endsWithNegativeSign = /\d[*/+-]{1}-$/,
    equalSign = "=";

  const maxDigitWarning = () => {
    setResultState("Digit Limit Met");
    setLastValueState(resultState);
    setTimeout(() => setResultState(lastValueState), 1000);
  };

  const handleClear = (e) => {
    setInputState(initialVal.input);
    setResultState(initialVal.result);
    setLastValueState(initialVal.lastValue);
    setLastClickedState(e.target.value);
  };

  const handleOperator = (e) => {
    if (!resultState.includes("Limit")) {
      const value = e.target.value;
      setResultState(value);
      setLastClickedState(e.target.value);
      if (lastClickedState === equalSign) {
        setInputState(lastValueState + value);
      } else if (!endsWithOperator.test(inputState)) {
        setLastValueState(inputState);
        setInputState(inputState + value);
      } else if (!endsWithNegativeSign.test(inputState)) {
        setInputState(
          (endsWithNegativeSign.test(inputState + value)
            ? inputState
            : lastValueState) + value
        );
      } else if (value !== "-") {
        setInputState(lastValueState + value);
      }
    }
  };

  const handleNumber = (e) => {
    if (!resultState.includes("Limit")) {
      setLastClickedState(e.target.value);

      const value = e.target.value;
      if (resultState.length > 21) {
        maxDigitWarning();
      } else if (lastClickedState === equalSign) {
        setResultState(value);
        setInputState(value !== "0" ? value : "");
      } else {
        setResultState(
          resultState === "0" || isOperator.test(resultState)
            ? value
            : resultState + value
        );
        setLastValueState(
          resultState === "0" || isOperator.test(resultState)
            ? value
            : resultState + value
        );
        setInputState(
          resultState === "0" && value === "0"
            ? inputState === ""
              ? value
              : inputState
            : /([^.0-9]0|^0)$/.test(inputState)
            ? inputState.slice(0, -1) + value
            : inputState + value
        );
      }
    }
  };

  const handleDecimal = (e) => {
    if (lastClickedState === equalSign) {
      setResultState("0.");
      setInputState("0.");
      setLastClickedState(e.target.value);
    } else if (!resultState.includes(".") && !resultState.includes("Limit")) {
      setLastClickedState(e.target.value);
      if (resultState.length > 21) {
        maxDigitWarning();
      } else if (
        endsWithOperator.test(inputState) ||
        (resultState === "0" && inputState === "")
      ) {
        setResultState("0.");
        setInputState(inputState + "0.");
      } else {
        setResultState(inputState.match(/(-?\d+\.?\d*)$/)[0] + ".");
        setInputState(inputState + ".");
      }
    }
  };

  const handleEqual = (e) => {
    if (!resultState.includes("Limit")) {
      if (lastClickedState !== equalSign) {
        let expression = inputState;
        while (endsWithOperator.test(expression)) {
          expression = expression.slice(0, -1);
        }
        expression = expression.replace("--", "+0+0+0+0+0+0+");
        let answer =
          Math.round(1000000000000 * eval(expression)) / 1000000000000;

        setResultState(answer.toString());
        setInputState(expression.replace("+0+0+0+0+0+0+", "‑-") + "=" + answer);
        setLastValueState(answer);
        setLastClickedState(e.target.value);
      }
    }
  };

  return (
    <CalculatorStyle>
      <div className="calculator-screen">
        <Input inputs={handleInput} />
        <Result results={handleResult} />
      </div>
      <Buttons
        clears={handleClear}
        operators={handleOperator}
        numbers={handleNumber}
        decimals={handleDecimal}
        equals={handleEqual}
      />
    </CalculatorStyle>
  );
};

export default CalculatorApp;
