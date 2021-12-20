import React from "react";

const TimerDisplay = ({
  timerStyle,
  whatTimeState,
  isStartState,
  handleReset,
  startStopFunction,
  PauseIcon,
  PlayIcon,
  RestartIcon,
}) => {
  return (
    <div id="timer">
      <h6 id="timer-label" className="label turn-red">
        {timerStyle}
      </h6>
      <div id="time-left" className="time-left turn-red">
        {whatTimeState}
      </div>
      <div className="button-group">
        <button id="start_stop" className="b" onClick={startStopFunction}>
          {isStartState ? PauseIcon : PlayIcon}
        </button>
        <button id="reset" className="b" onClick={handleReset}>
          {RestartIcon}
        </button>
      </div>
    </div>
  );
};

export default TimerDisplay;
