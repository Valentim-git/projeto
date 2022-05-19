import styles from "./PaginaInicial.modules.css";

import Logo from '../Imgs/Logo.png'

function PInicial(){
    return (
        <>
        < div>
            <h1>SocialTweet</h1>
            <img src={Logo} alt="" /> 
        </div>

        < div className="container">
  <div div className="row">
    <div className="col-12">
         <div className={styles.divs}>
            <h4>Registe-se no socialtweet</h4>
            <button>Registe-se</button>
            <h4>Já tem conta?</h4>
            <button>Entrar</button>
            
        </div>
    </div>
    <div className="col-12"></div>
    </div>
    </div>

  

        </>

    )
}

export default PInicial;