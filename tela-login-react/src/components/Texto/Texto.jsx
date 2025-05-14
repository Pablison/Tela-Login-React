import React from 'react';
import './Texto.css';

export function Texto({ classe, children }) {
    return (
        <p className={classe}>{children}</p>
    )
}