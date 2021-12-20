import React, { useState, useEffect } from "react";
import DrumMachineStyle from "../../../styles/tools/DrumMachineStyle";
import { bankOne, bankTwo } from "./Bank";
import DrumControl from "./DrumControl";
import DrumPad from "./DrumPad";

const DrumMachineApp = () => {
  const [displayName, setDisplayName] = useState("\u00A0");
  const [bank, setBank] = useState(bankOne);
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    document.addEventListener("keypress", playSound);
    return () => {
      document.removeEventListener("keypress", playSound);
    };
  });

  const playSound = (e) => {
    const keyboardOrMouse = e.key
      ? e.key.toUpperCase()
      : e.target.childNodes[0].id;
    const sound = document.getElementById(keyboardOrMouse);
    const button = sound?.parentElement;
    const buttonName = button?.id.replace(/-/g, " ");
    if (sound) {
      nameChange(buttonName);
      changeStyle(button);
      if (power) {
        sound.currentTime = 0;
        sound.volume = volume;
        sound.play();
      }
    }
  };

  const nameChange = (name) => {
    setDisplayName(name);
  };

  const changeStyle = (element) => {
    if (power) {
      element.classList.remove("drum-pad-style", "green-box");
      element.classList.add("active-pad-on");
      return setTimeout(() => {
        element.classList.add("drum-pad-style", "green-box");
        element.classList.remove("active-pad-on");
      }, 100);
    } else {
      element.classList.remove("drum-pad-style", "green-box");
      element.classList.add("active-pad-off");
      return setTimeout(() => {
        element.classList.add("drum-pad-style", "green-box");
        element.classList.remove("active-pad-off");
      }, 100);
    }
  };

  const whatToDisplay = power ? displayName : "\u00A0";

  const clearDisplayName = () => {
    setDisplayName("\u00A0");
  };

  const handleBankCheck = () => {
    if (bank === bankOne) {
      setBank(bankTwo);
      setDisplayName("Smooth Piano Kit");
    } else {
      setBank(bankOne);
      setDisplayName("Heater Kit");
    }
  };

  const handlePowerChange = () => {
    setPower(!power);
    clearDisplayName();
  };

  const adjustVolume = (e) => {
    e.preventDefault();
    setVolume(e.target.value);
  };

  useEffect(() => {
    setDisplayName("Volume : " + Math.round(volume * 100));
  }, [volume]);

  return (
    <DrumMachineStyle power>
      <DrumPad
        bank={bank}
        power={power}
        volume={volume}
        updateDisplay={nameChange}
        playSound={playSound}
      />
      <DrumControl
        whatToDisplay={whatToDisplay}
        handleBankCheck={handleBankCheck}
        handlePowerChange={handlePowerChange}
        volume={volume}
        adjustVolume={adjustVolume}
      />
    </DrumMachineStyle>
  );
};

export default DrumMachineApp;
