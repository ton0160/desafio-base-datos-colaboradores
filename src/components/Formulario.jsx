import React, { useState } from "react";
import AlertComponent from "./Alert";

function Formulario({ agregarColaborador }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [colorAlerta, setColorAlerta] = useState("");

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const agregarNuevoColaborador = () => {
    if (nombre && correo && edad && cargo && telefono) {
      if (!emailRegex.test(correo)) {
        setMensajeAlerta("El correo electrónico no es válido.");
        setColorAlerta("danger");
        return;
      }

      // Lógica para agregar el colaborador
      const nuevoColaborador = {
        id: (Math.random() * 1000).toFixed(0), // ID temporal
        nombre,
        correo,
        edad,
        cargo,
        telefono,
      };
      agregarColaborador(nuevoColaborador);

      // Establece el mensaje de alerta de éxito
      setMensajeAlerta("Colaborador agregado con éxito");
      setColorAlerta("success");

      // Limpia los campos de entrada después de agregar
      setNombre("");
      setCorreo("");
      setEdad("");
      setCargo("");
      setTelefono("");
    } else {
      // Si faltan campos, muestra una alerta de error
      setMensajeAlerta("Todos los campos son obligatorios.");
      setColorAlerta("danger");
    }
  };

  return (
    <div>
      <form action="" className="d-flex flex-column justify-content-center">
        <h3 className="m-3">Agregar un colaborador</h3>
        <input
          type="text"
          placeholder="Nombre del colaborador"
          className="mb-3 m-3"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="mb-3 m-3"
          onChange={(e) => setCorreo(e.target.value)}
          value={correo}
        />
        <input
          type="number"
          placeholder="Edad"
          className="mb-3 m-3"
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
        <input
          type="text"
          placeholder="Cargo"
          className="mb-3 m-3"
          onChange={(e) => setCargo(e.target.value)}
          value={cargo}
        />
        <input
          type="number"
          placeholder="Teléfono"
          className="mb-3 m-3"
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
        <AlertComponent msg={mensajeAlerta} color={colorAlerta} />
        <button
          type="button"
          className="btn btn-success m-3"
          onClick={agregarNuevoColaborador}
        >
          Agregar colaborador
        </button>
      </form>
    </div>
  );
}

export default Formulario;