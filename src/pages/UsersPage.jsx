import React, { useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const obtenerDatos = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    setUsers(data);
  };

  return (
    <>
      <section className="row">
        <article className="col">
          <button className="btn btn-info" onClick={obtenerDatos}>
            Obtener datos
          </button>
        </article>
      </section>

      <main className="row">
        <article className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </main>
    </>
  );
};

export default UsersPage;
