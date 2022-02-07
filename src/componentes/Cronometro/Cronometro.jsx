import React, { useEffect, useState } from 'react';
import './Cronometro.css';


const Cronometro = () => {
    const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className="stopwatch">
      <h2>StopWatch</h2>
      <h3>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h3>
      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)} className="btn">Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)} className="btn">Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)} className="btn">Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)} className="btn">Resume</button>
        )}
      </div>
    </div>
  );
};

export default Cronometro;