import React from 'react';
import './Botao.css';

export function Botao({ children }) {
    return (
        <button type='submit' className='form__botao'>{children}</button>
    )
}