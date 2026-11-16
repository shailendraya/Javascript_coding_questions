import React from 'react';
import { useState , useEffect} from 'react'

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState({
    key: "id",
    asc: true
  });

  const filteredData = data.filter((item) => {
    // console.log('item', item.author, search)
    return item.author.includes(search);
  })

  // console.log(filteredData)

   filteredData.sort((a,b) => {
    let result;
    if(sort.key === "id"){
      result = Number(a.id) - Number(b.id)
    } else {
      result = b.author.localeCompare(a.author);
    }

    return  sort.asc ? result : -result
  })

  const handleSort = (key) => {
    setSort((prev) => ({
      key,
      asc: prev.key === key ? !prev.asc : true
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try{
      const output = await fetch('https://picsum.photos/v2/list');
      const response = await output.json();
      // console.log(response)
      setData(response)
      } catch(e) {
        console.log(e)
      }
    };

    fetchData();
  },[]);

  return (
    <div>
      <h2>Users Table</h2>

      <input
        placeholder="Search ID or Author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>
              ID
            </th>

            <th onClick={() => handleSort("author")}>
              Author 
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.author}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredData.length === 0 && <p>No records found</p>}
    </div>
  )
}

export default App
