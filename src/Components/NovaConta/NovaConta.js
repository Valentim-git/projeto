import styles from "./NovaConta.modules.css";

import Logo from '../Imgs/Logo.png'

function NovaConta (){
    return(
        <>
            < div>
                <img src={Logo} alt="" /> 
            </div>
        <div>
            <h1>Criar nova conta</h1>
        </div>    
        < div class="container">
  <div div class="row">
    <div class="col-10">
    <form action="">
                <input type="text" id="fname" name="primeironome" placeholder="Primeiro Nome"/>
                <input type="text" id="lname" name="ultimonome" placeholder="Ultimo Nome"/>
                <input type="text" id="uname" name="nomeutilizador" placeholder="Nome Utilizador"/>
                <input type="text" id="email" name="email" placeholder="E-mail"/>
                <input type="text" id="password" name="password" placeholder="Palavra-passe"/>

                <textarea cols="106" rows="10" name="biografia" id="biografia" placeholder="Breve Biografia" ></textarea>

                <input type="submit" value="Regista-te"></input>
            </form>
    </div>
    <div class="col-10"></div>
    </div>
    </div>

    </>


    )
}

export default NovaConta;