import React from 'react';
import './atom.css';

const JoinButton = ({title, classname}) => {
    return (
        <button className={classname}>
            {title}
        </button>
    )
}

export default JoinButton;