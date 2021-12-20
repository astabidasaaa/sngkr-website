import React from "react";
import ControlComponent from "./ControlComponent";

const TimerControl = ({
  handleLengthChange,
  breakState,
  sessionState,
  upIcon,
  downIcon,
}) => {
  return (
    <div id="control">
      <ControlComponent
        state={sessionState}
        breakOrSession="session"
        handleLengthChange={handleLengthChange}
        upIcon={upIcon}
        downIcon={downIcon}
      />
      <ControlComponent
        state={breakState}
        breakOrSession="break"
        handleLengthChange={handleLengthChange}
        upIcon={upIcon}
        downIcon={downIcon}
      />
    </div>
  );
};

export default TimerControl;
