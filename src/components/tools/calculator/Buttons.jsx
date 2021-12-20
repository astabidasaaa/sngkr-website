import React from "react";
import { FaMinus, FaTimes, FaDivide, FaEquals, FaPlus } from "react-icons/fa";

const Buttons = ({ clears, operators, numbers, decimals, equals }) => {
  return (
    <div className="buttons">
      <button id="clear" className="btn clear-btn" value="AC" onClick={clears}>
        AC
      </button>
      <button
        id="divide"
        className="btn divide operation-btn"
        value="/"
        onClick={operators}
      >
        <FaDivide />
      </button>
      <button
        id="multiply"
        className="btn multiply operation-btn"
        value="*"
        onClick={operators}
      >
        <FaTimes />
      </button>
      <button
        id="subtract"
        className="btn subtract operation-btn"
        value="-"
        onClick={operators}
      >
        <FaMinus />
      </button>
      <button
        id="add"
        className="btn add operation-btn"
        value="+"
        onClick={operators}
      >
        <FaPlus />
      </button>
      <button
        id="nine"
        className="btn nine number-btn"
        value="9"
        onClick={numbers}
      >
        9
      </button>
      <button
        id="eight"
        className="btn eight number-btn"
        value="8"
        onClick={numbers}
      >
        8
      </button>
      <button
        id="seven"
        className="btn seven number-btn"
        value="7"
        onClick={numbers}
      >
        7
      </button>
      <button
        id="six"
        className="btn six number-btn"
        value="6"
        onClick={numbers}
      >
        6
      </button>
      <button
        id="five"
        className="btn five number-btn"
        value="5"
        onClick={numbers}
      >
        5
      </button>
      <button
        id="four"
        className="btn four number-btn"
        value="4"
        onClick={numbers}
      >
        4
      </button>
      <button
        id="three"
        className="btn three number-btn"
        value="3"
        onClick={numbers}
      >
        3
      </button>
      <button
        id="two"
        className="btn two number-btn"
        value="2"
        onClick={numbers}
      >
        2
      </button>
      <button
        id="one"
        className="btn one number-btn"
        value="1"
        onClick={numbers}
      >
        1
      </button>
      <button
        id="zero"
        className="btn zero number-btn"
        value="0"
        onClick={numbers}
      >
        0
      </button>
      <button
        id="decimal"
        className="btn decimal-btn"
        value="."
        onClick={decimals}
      >
        .
      </button>
      <button id="equals" className="btn equal-btn" value="=" onClick={equals}>
        <FaEquals />
      </button>
    </div>
  );
};

export default Buttons;
