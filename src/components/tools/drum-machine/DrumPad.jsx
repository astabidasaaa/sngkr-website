import React from "react";
import DrumComponent from "./DrumComponent";

const DrumPad = ({ bank, playSound }) => {
  return (
    <div id="drum-pad">
      {bank.map((drumObj, i, padBankArr) => {
        return (
          <DrumComponent
            key={padBankArr[i].keyCode}
            drumId={padBankArr[i].id}
            audioId={padBankArr[i].keyTrigger}
            audioSrc={padBankArr[i].url}
            playSound={playSound}
          />
        );
      })}
    </div>
  );
};

export default DrumPad;
