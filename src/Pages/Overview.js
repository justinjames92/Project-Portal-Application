import React, { useState, useEffect } from "react";

function Overview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <>
      <h1>Overview</h1>
      <table striped bordered hover variant="dark" className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, k) => (
            <tr key={k}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Overview;
