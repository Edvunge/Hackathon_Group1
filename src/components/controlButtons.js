
import React from "react";

export default function ControlButtons(props) {
    const StartButton = (
      <div
           onClick={props.handleStart}>
        Start
      </div>
    );
    const Buttons = (
      <div>
        <div 
             onClick={props.handleEnd}>
          End
        </div>
        <div
             onClick={props.handlePauseResume}>
          {props.isPaused ? "Resume" : "Pause"}
        </div>
      </div>
    );
    
    return (
      <div>
        <div>{props.active ? Buttons : StartButton}</div>
      </div>
    );
  }