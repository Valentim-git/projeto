import styles from "./Login.modules.css";

import { useState } from 'react'
import Logo from '../Imgs/Logo.png'



function Login (){

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuario ${name} cadastrado com a senha ${password}`)
      }
    
      const [name, setName] = useState()
      const [password, setPassword] = useState()

    return(
        <div>
            < div>
                <img src={Logo} alt="" /> 
            </div>
            <div>
                <h1>Login</h1>
            </div> 
            < div class="container">
  <div div class="row">
    <div class="col-12">
    <form onSubmit={cadastrarUsuario}>
                <input type="username" id="username" name="username" placeholder="Nome do Utilizador" onChange={(e) => setName(e.target.value)}/>
                <input type="password" id="password" name="password" placeholder="Palavra-Passe" onChange={(e) => setPassword(e.target.value)}/>

                <input class="input" type="submit" value="Login"></input>
            </form>
            <h7>Esqueceu-se da sua Palavra-passe?</h7>
    </div>
    <div class="col-12"></div>
    </div>
    </div>

                
        </div>
    )
}

export default Login;