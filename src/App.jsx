import { useState } from 'react'
import './App.css'

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const [errorNombre, setErrorNombre] = useState("");
  const [errorApellido, setErrorApellido] = useState("");
  const [errorTelefono, setErrorTelefono] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const nomval = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    if (valor === "") setErrorNombre("Campo obligatorio");
    else if (valor.length < 5) setErrorNombre("Debe contener al menos 5 caracteres");
    else if (valor.length > 30) setErrorNombre("No debe contener más de 30 caracteres");
    else setErrorNombre("");
  };

  const apval = (e) => {
    const valor = e.target.value;
    setApellido(valor);
    if (valor === "") setErrorApellido("Campo obligatorio");
    else if (valor.length < 5) setErrorApellido("Debe contener al menos 5 caracteres");
    else if (valor.length > 30) setErrorApellido("No debe contener más de 30 caracteres");
    else setErrorApellido("");
  };

  const telval = (e) => {
    const valor = e.target.value;
    setTelefono(valor);
    if (valor === "") setErrorTelefono("Campo obligatorio");
    else if (valor.length < 7) setErrorTelefono("Debe contener al menos 7 caracteres");
    else if (valor.length > 10) setErrorTelefono("No debe contener más de 10 caracteres");
    else setErrorTelefono("");
  };

  const emval = (e) => {
    const valor = e.target.value;
    setEmail(valor);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valor === "") setErrorEmail("Campo obligatorio");
    else if (!regex.test(valor)) setErrorEmail("Debe ser un email válido");
    else setErrorEmail("");
  };

  const formularioValido = () => {
    return (
      nombre && apellido && telefono && email &&
      !errorNombre && !errorApellido && !errorTelefono && !errorEmail
    );
  };

  return (
    <form action="">
      <label htmlFor="nombre">Nombres</label><br />
      <input id="nombre" type="text" onChange={nomval} value={nombre} placeholder='Ej: Carlos' /><br />
      {errorNombre && <span style={{ color: 'red' }}>{errorNombre}</span>}<br />

      <label htmlFor="apellido">Apellidos</label><br />
      <input id="apellido" type="text" onChange={apval} value={apellido} placeholder='Ej: Perez' /><br />
      {errorApellido && <span style={{ color: 'red' }}>{errorApellido}</span>}<br />

      <label htmlFor="telefono">Teléfono</label><br />
      <input id="telefono" type="text" onChange={telval} value={telefono} placeholder='Ej: 123456789' /><br />
      {errorTelefono && <span style={{ color: 'red' }}>{errorTelefono}</span>}<br />

      <label htmlFor="email">Email</label><br />
      <input id="email" type="email" onChange={emval} value={email} placeholder='Ej: carlos.perez@gmail.com' /><br />
      {errorEmail && <span style={{ color: 'red' }}>{errorEmail}</span>}<br /><br />

      {formularioValido() && <button type="submit">Enviar</button>}
    </form>
  );
}

export default Formulario;
