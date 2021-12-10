import React from "react";
import { useTimer } from "react-timer-hook";
import { TimerColumn, TimerWrapper } from "./styles";

export default function Timer({ expiryTimestamp }) {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
  });

  return (
    <TimerWrapper>
      <TimerColumn>
        <div>
          <span>{hours}</span>
        </div>
        <p>Hours</p>
      </TimerColumn>
      <TimerColumn>
        <div>
          <span>{minutes}</span>
        </div>
        <p>Minutes</p>
      </TimerColumn>
      <TimerColumn>
        <div>
          <span>{seconds}</span>
        </div>
        <p>Seconds</p>
      </TimerColumn>
    </TimerWrapper>
  );
}
