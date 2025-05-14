import React from 'react';
import './Titulo.css';

export function Titulo({ children }) {
    return (
        <h1 className='form__titulo'>{children}</h1>
    )
}