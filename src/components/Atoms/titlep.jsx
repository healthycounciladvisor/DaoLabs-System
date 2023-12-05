import React from 'react';
import './atom.css';

const TitleP = ({title, fontSize}) => {
    
    return (
        <p className="title_p" style={{fontSize: fontSize}}>
            {title}
        </p>
    )
}

export default TitleP;