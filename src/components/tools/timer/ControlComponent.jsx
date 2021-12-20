import React from "react";

const ControlComponent = ({
  state,
  breakOrSession,
  handleLengthChange,
  upIcon,
  downIcon,
}) => {
  return (
    <div id={breakOrSession}>
      <h6 id={`${breakOrSession}-label`} className="label">
        {`${breakOrSession} Length`}
      </h6>
      <button
        id={`${breakOrSession}-increment`}
        className={`b ${breakOrSession}-increment`}
        onClick={handleLengthChange}
      >
        {upIcon}
      </button>
      <div id={`${breakOrSession}-length`} className="length-number">
        {state}
      </div>
      <button
        id={`${breakOrSession}-decrement`}
        className={`b ${breakOrSession}-decrement`}
        onClick={handleLengthChange}
      >
        {downIcon}
      </button>
    </div>
  );
};

export default ControlComponent;
