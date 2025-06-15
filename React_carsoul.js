// https://stackblitz.com/edit/react-simple-code-editor-f2ztpudn?file=src%2FApp.js

import React, { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const output = await fetch('https://picsum.photos/v2/list');
        const response = await output.json();
        setData(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const onPrev = () => {
    setIndex((pre) => pre - 1); // Ensure function syntax is used
  };
  
  const onNext = () => {
    setIndex((prev) => prev + 1); // Ensure function syntax is used
  };
  

  return (
    <div>
      <button onClick={onPrev}>Pre</button>

      <img src={data[index]?.download_url} width="100px"></img>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
