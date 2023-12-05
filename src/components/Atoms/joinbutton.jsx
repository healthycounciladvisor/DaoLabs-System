import React from 'react';
import './atom.css';

const JoinButton = ({title, JoinButtonclassname}) => {
    return (
        <button className={JoinButtonclassname}>
            {title}
        </button>
    )
}

export default JoinButton;