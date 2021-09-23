import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FormComponent = () => {

const [register,setRegister] = useState({
    userName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
})
const handleOnChange = (e) => {
    console.log({[e.target.name]: e.target.value});
    console.log(register);
    setRegister({...register, [e.target.name]: e.target.value})
}
    return (
        <div className="container">
        <h1>Registro de Usuario</h1>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nombre:</Form.Label>
    <Form.Control type="text" placeholder="Ingrese su nombre completo" name="userName" value={register.userName} onChange={handleOnChange} />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Apellido:</Form.Label>
    <Form.Control type="text" placeholder="Ingrese sus apellidos" name="lastName" value={register.lastName} onChange={handleOnChange} />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" placeholder="Ingrese su email" name="email" value={register.email} onChange={handleOnChange} />
   </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña:</Form.Label>
    <Form.Control type="password" placeholder="Ingrese su contraseña" name="password" value={register.password} onChange={handleOnChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirme su Contraseña:</Form.Label>
    <Form.Control type="password" placeholder="Confirme su contraseña" name="confirmPassword" value={register.confirmPassword} onChange={handleOnChange} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Enviar Registro
  </Button>
</Form>
<div className="Register" >
    <h2>Tu Registro Aqui:</h2>
    <p>Nombre: {register.userName}</p>
    <p>Apellido: {register.lastName}</p>
    <p>Email: {register.email}</p>
    <p>Contraseña: {register.password}</p>
    <p>Confirmar Contraseña: {register.confirmPassword}</p>
</div>
    </div>
   
    )
}
export default FormComponent;
