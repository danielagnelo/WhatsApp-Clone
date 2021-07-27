import React from 'react'
import Api from '../Api';
import './Login.css';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({onReceive}) => {
    const handleFacebookLogin = async () =>{
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user)
        }else{
            alert('Erro!');
        }
    }
    return (
        <div className="tela-geral">
            <div className="lateral-esquerda">
                <div className="welcome">Welcome</div>
                <div className="cadastro">If you're a new user, please click on the button below</div>
                <button className="cadastro-btn">Cadastrar-se</button>
            </div>
            <div className="lateral-direita">
                <div className="login-area">
                    <div className="title">Login</div>
                    <div className="botoes">
                        <div className="icon" >
                            <FacebookIcon style={{fontSize:50}} onClick={handleFacebookLogin} />
                        </div>
                        <div className="icon">
                            <GitHubIcon style={{fontSize:45}} />
                        </div>
                        <div className="icon">
                            <LinkedInIcon style={{fontSize:50}} />
                        </div>
                    </div>
                    <div className="menssagem">ou use seu email para logar-se</div>
                </div>
                <div className="text-area">
                    <input id="barras" style={{paddingLeft: '15px'}} className="email" placeholder="Email"/>
                    <input id="barras" style={{paddingLeft: '15px'}} className="senha" placeholder="Password"/>
                </div>
                <button className="enviar-btn">Entrar</button>
            </div>
        </div>
    )
}
