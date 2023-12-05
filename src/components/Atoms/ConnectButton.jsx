import React from 'react';
import './atom.css';

const ConnectButton = ({title}) => {
    return (
        <button className="connect_button">
            {title}
        </button>
    )
}

export default ConnectButton;