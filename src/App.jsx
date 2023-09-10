import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import "./App.css";

function App() {
  const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);
  const [filtro, setFiltro] = useState("");

  const inputFiltro = (e) => {
    setFiltro(e.target.value);
  };

  const filtrar = () => {
    const listaFiltrada = BaseColaboradores.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.edad.includes(filtro) ||
        colaborador.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.telefono.includes(filtro)
    );
    setColaboradores(listaFiltrada);
  };

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const eliminarColaborador = (id) => {
    const nuevaLista = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevaLista);
  };

  return (
    <section>
    <div className="container-center">
    <Buscador className="buscador" inputFiltro={inputFiltro} filtrar={filtrar} />
      <div className="container-main">
        <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
        <Formulario agregarColaborador={agregarColaborador} />
      </div>
    </div>
  </section>
  );
}

export default App;