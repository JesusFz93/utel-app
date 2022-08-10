import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const PacientesPage = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const obtenerPacientes = async () => {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setPacientes(resp.data);
    };

    obtenerPacientes();
  }, []);

  return (
    <>
      <main className="row">
        <article className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Ver mas...</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente) => {
                return (
                  <tr key={paciente.id}>
                    <th scope="row">{paciente.id}</th>
                    <td>{paciente.name}</td>
                    <td>{paciente.email}</td>
                    <td>{paciente.phone}</td>
                    <td>
                      <NavLink
                        className="btn btn-info"
                        to={`/paciente/${paciente.id}`}
                      >
                        Ver mas...
                      </NavLink>
                    </td>
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

export default PacientesPage;
