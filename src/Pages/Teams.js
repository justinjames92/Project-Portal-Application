import React, { useEffect, useState } from "react";

function Teams() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>Teams</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Organization</th>
            <th>Client</th>
          </tr>
        </thead>

        <tbody>
          {data.map((i, k) => (
            <tr key={k}>
              <td>{i.company.name}</td>
              <td>{i.company.catchPhrase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
