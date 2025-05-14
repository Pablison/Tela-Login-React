import React from 'react';
import './Subtitulo.css';

export function Subtitulo({ children }) {
    return (
        <h2 className='form__texto'>{children}</h2>
    )
}