import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PacientePage = () => {
  const { id } = useParams();
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerPaciente = async () => {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setPaciente(resp.data);
    };

    obtenerPaciente();
  }, [id]);

  return (
    <>
      <h1>Paciente</h1>
      <h2>{paciente.id}</h2>
      <h2>{paciente.name}</h2>
      <h2>{paciente.email}</h2>
      <h2>{paciente.phone}</h2>
    </>
  );
};

export default PacientePage;
