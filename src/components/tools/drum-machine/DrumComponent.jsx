import React from "react";

const DrumComponent = ({ drumId, audioId, audioSrc, playSound }) => {
  return (
    <button
      id={drumId}
      className="drum-pad-style green-box no-select"
      onMouseDown={playSound}
    >
      <audio className="clip" id={audioId} src={audioSrc} />
      {audioId}
    </button>
  );
};

export default DrumComponent;
