import React, { useState, useEffect } from "react";
import {
  FaChevronUp as UpIcon,
  FaChevronDown as DownIcon,
  FaUndoAlt as RestartIcon,
  FaPause as PauseIcon,
  FaPlay as PlayIcon,
} from "react-icons/fa";
import TimerAppStyle from "../../../styles/tools/TimerAppStyle";
import TimerControl from "./TimerControl";
import TimerDisplay from "./TimerDisplay";

const defaultBreakState = 5,
  defaultSessionState = 25,
  defaultTimerState = 1500000,
  defaultWhatTimeState = "25:00",
  defaultStartState = false,
  defaultTimerStyle = "Session";

const TimerApp = () => {
  const [breakState, setBreakState] = useState(defaultBreakState),
    [sessionState, setSessionState] = useState(defaultSessionState),
    [timerState, setTimerState] = useState(defaultTimerState),
    [whatTimeState, setWhatTimeState] = useState(defaultWhatTimeState),
    [isStartState, setIsStartState] = useState(defaultStartState),
    [timerStyle, setTimerStyle] = useState(defaultTimerStyle),
    [audioBeep, setAudioBeep] = useState("");

  useEffect(() => {
    if (timerStyle === "Session") {
      setTimerState(sessionState * 1000 * 60);
    }
  }, [timerStyle, sessionState]);

  useEffect(() => {
    if (timerStyle === "Break") {
      setTimerState(breakState * 1000 * 60);
    }
  }, [timerStyle, breakState]);

  useEffect(() => {
    let timerRun;
    if (isStartState && timerState >= 0) {
      timerRun = setTimeout(() => setTimerState(timerState - 1000), 1000);

      if (timerState === 59000) {
        turnRed(true);
      }

      if (timerState === 0) {
        audioBeep.play();
      }
    } else if (timerState < 0) {
      turnRed(false);

      if (timerStyle === "Session") {
        setTimerStyle("Break");
      } else if (timerStyle === "Break") {
        setTimerStyle("Session");
      }
    }

    countdown();

    return () => clearTimeout(timerRun);
  }, [isStartState, timerState]);

  const turnRed = (isTrue) => {
    document
      .getElementById("timer-label")
      .classList.toggle("turn-red-now", isTrue);

    document
      .getElementById("time-left")
      .classList.toggle("turn-red-now", isTrue);
  };

  const handleLengthChange = (e) => {
    const ID = e.target.id;

    if (!isStartState) {
      if (ID === "break-decrement" && breakState > 1) {
        setBreakState(breakState - 1);
      }

      if (ID === "break-increment" && breakState < 60) {
        setBreakState(breakState + 1);
      }

      if (ID === "session-decrement" && sessionState > 1) {
        setSessionState(sessionState - 1);
      }

      if (ID === "session-increment" && sessionState < 60) {
        setSessionState(sessionState + 1);
      }
    }
  };

  const handleReset = () => {
    setBreakState(defaultBreakState);
    setSessionState(defaultSessionState);
    setTimerState(defaultTimerState);
    setWhatTimeState(defaultWhatTimeState);
    setIsStartState(defaultStartState);
    setTimerStyle(defaultTimerStyle);
    turnRed(false);

    audioBeep.pause();
    audioBeep.currentTime = 0;
  };

  const countdown = () => {
    let minutes = Math.floor(timerState / (1000 * 60));
    let seconds = Math.floor((timerState % (1000 * 60)) / 1000);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    setWhatTimeState(minutes + ":" + seconds);
  };

  return (
    <TimerAppStyle>
      <TimerControl
        handleLengthChange={handleLengthChange}
        breakState={breakState}
        sessionState={sessionState}
        upIcon={<UpIcon />}
        downIcon={<DownIcon />}
      />
      <TimerDisplay
        timerStyle={timerStyle}
        whatTimeState={whatTimeState}
        isStartState={isStartState}
        handleReset={handleReset}
        startStopFunction={() => setIsStartState(!isStartState)}
        PauseIcon={<PauseIcon />}
        PlayIcon={<PlayIcon />}
        RestartIcon={<RestartIcon />}
      />
      <audio
        id="beep"
        preload="auto"
        ref={(audio) => {
          setAudioBeep(audio);
        }}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </TimerAppStyle>
  );
};

export default TimerApp;
