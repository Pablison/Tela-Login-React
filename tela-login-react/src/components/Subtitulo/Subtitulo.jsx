import React from 'react';
import '@/components/Subtitulo/Subtitulo.css';

export function Subtitulo({ children }) {
    return (
        <h2 className='form__texto'>{children}</h2>
    )
}