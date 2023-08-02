import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { handleSingUp, loading } = useContext(AuthContext)

  const enviarFormulario = (e) => {
    e.preventDefault()
    console.log(username)
    console.log(password)
    if (username === "" && password === "") {
      console.log("no entrando en validación")
    } else {
      console.log("entrando en validación")
      handleSingUp(username, password)
    }
  }


  return (
    <>
      {
        loading ? <p>cargando</p> :
          <form onSubmit={enviarFormulario}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                onChange={(e) => { setUsername(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </div>
            <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
          </form>
      }
    </>
  )
}

export default Login