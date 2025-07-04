import React, { useState, useEffect, useCallback } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://fakestoreapi.com/products');
      const result = await data.json();
      setData(result);
      setFiltered(result); // show all by default
    };
    fetchData();
  }, []);

  // Custom debounce function
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Debounced filter function
  const handleSearch = useCallback(
    debounce((query) => {
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(filteredData);
    }, 500),
    [data]
  );

  const onChangeSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    handleSearch(query); // call debounced
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={onChangeSearch}
          placeholder="Search product title..."
        />
      </div>

      <div>
        {filtered.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
}
