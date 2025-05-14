import React from 'react';
import './Checkbox.css';

export function Checkbox() {
    return (
        <>
            <div className='form__campo-checkbox'>
                <input type='checkbox' id='lembrar' />
                <label htmlFor='lembrar'></label>
            </div>
            <p className='form__opcoes-texto'>Lembrar-me</p>
        </>
    )
}