import styles from "./Login.modules.css";

import Logo from '../Imgs/Logo.png'

function Login (){
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
    <form action="">
                <input type="username" id="username" name="username" placeholder="Nome do Utilizador"/>
                <input type="password" id="password" name="password" placeholder="Palavra-Passe"/>

                <input type="submit" value="Login"></input>
            </form>
    </div>
    <div class="col-12"></div>
    </div>
    </div>
        </div>
    )
}

export default Login;