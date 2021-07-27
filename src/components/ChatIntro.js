import React from 'react';
import '../components/ChatIntro.css';

import ComputerIcon from '@material-ui/icons/Computer';

export default function ChatIntro() {
    return (
        <div className="chat-intro">
            <img className='' src="https://image.flaticon.com/icons/png/512/124/124034.png" alt="" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu celular para sincronizar suas mensagens.<br />Para reduzir o uso de dados, conecte o seu telefone ao Wi-Fi.</h2>
            <p style={{ color: '#919191' }}>_________________________________________________________________</p>
            <div className="chat-intro-icon">
                <ComputerIcon style={{ color: '#919191' }} />
                <h2 style={{ color: '#919191' }} className="chat-intro-h2">O WhatsApp está disponível para Windows<span className="verde">. Baixe aqui.</span></h2>
            </div>
        </div>
    )
}
