import React, { useEffect, useState } from "react";

function Projects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>Projects</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Address</th>
            <th>Suite</th>
            <th>Street</th>
          </tr>
        </thead>

        <tbody>
          {data.map((i, k) => (
            <tr key={k}>
              <td>{i.username}</td>
              <td>{i.address.city}</td>
              <td>{i.address.suite}</td>
              <td>{i.address.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Projects;
