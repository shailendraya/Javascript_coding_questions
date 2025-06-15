// https://stackblitz.com/edit/react-simple-code-editor-jvvugahl?file=src%2FApp.js,src%2Findex.js

import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalID] = useState();

  const onStart = () => {
    setRunning(true);
  };

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
    setIntervalID(timer);
    console.log('timer', timer);
    return () => clearInterval(timer);
  }, [running]);

  const onPause = () => {
    console.log('pause');
    console.log('timer2', intervalId);
    setRunning(false);
    return clearInterval(intervalId);
  };
  const onStop = () => {
    setCount(0);
    setRunning(false);
    return clearInterval(intervalId);
  };
  console.log('render');
  return (
    <>
      <div>{count}</div>
      <button onClick={onStart}>start </button>
      <button onClick={onPause}>pause </button>
      <button onClick={onStop}>stop </button>
    </>
  );
}
