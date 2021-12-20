import React from "react";
import {
  FaVolumeDown as VolumeDown,
  FaVolumeUp as VolumeUp,
  FaVolumeOff as VolumeOff,
} from "react-icons/fa";

const DrumControl = ({
  whatToDisplay,
  handleBankCheck,
  handlePowerChange,
  volume,
  adjustVolume,
}) => {
  return (
    <div id="drum-control">
      {/* instrument name */}
      <div id="display" className="no-select">
        <h5>{whatToDisplay}</h5>
      </div>

      {/* power bank */}
      <div id="power-bank">
        <div id="power">
          <label className="switch">
            <input
              type="checkbox"
              name="power"
              onClick={handlePowerChange}
            ></input>
            <div className="slider round pwr no-select">
              <span>I</span> <span>O</span>
            </div>
          </label>

          <p>Power</p>
        </div>
        <div id="bank">
          <label className="switch">
            <input
              type="checkbox"
              name="bank"
              onClick={handleBankCheck}
            ></input>
            <div className="slider round bnk no-select">
              <span>B</span> <span>A</span>
            </div>
          </label>
          <p>Bank</p>
        </div>
      </div>

      {/* volume control */}
      <div id="volume-control">
        {volume > 0 ? (
          volume > 0.5 ? (
            <VolumeUp />
          ) : (
            <VolumeDown />
          )
        ) : (
          <VolumeOff />
        )}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          className="volume-slider"
          id="volumeRange"
          onChange={adjustVolume}
        ></input>
      </div>
    </div>
  );
};

export default DrumControl;
