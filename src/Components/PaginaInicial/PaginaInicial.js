import styles from "./PaginaInicial.modules.css";

import Logo from '../Imgs/Logo.png'

function PInicial(){
    return (
        <>
        < div>
            <h1>SocialTweet</h1>
            <img src={Logo} alt="" /> 
        </div>

        <div className={styles.divs}>
            <h4>Registe-se no socialtweet</h4>
            <button>Registe-se</button>
            <h4>Já tem conta?</h4>
            <button>Entrar</button>
            <p>
                <h7>Esqueceu-se da sua Palavra-passe?</h7>
            </p>
            
        </div>

        </>

    )
}

export default PInicial;