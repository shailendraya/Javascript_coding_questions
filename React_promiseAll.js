/*

https://stackblitz.com/edit/react-simple-code-editor-jvvugahl?file=src%2FApp.js

*/

import React, { useState, useEffect } from 'react';

export default function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets/1/');
        const data = await response.json();

        let promises = [];
        console.log(data);
        for (let i = 0; i < data.films.length; i++) {
          console.log(data.films[i]);
          promises.push(fetch(data.films[i]).then((res) => res.json()));
        }
        const results = await Promise.all(promises);

        const films = results.map((film) => film.title);
        setUserData({
          name: data.name,
          films: films,
        });
      } catch (err) {
        console.log('err-->', err);
      }
    };
    fetchData();
  }, []);

  console.log('userData', userData);
  return <div>Hello World</div>;
}

