import React, { useEffect, useState } from "react";

function Employees() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>Employees</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Contact Number</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {data.map((i, k) => (
            <tr key={k}>
              <td>{i.phone}</td>
              <td>{i.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
