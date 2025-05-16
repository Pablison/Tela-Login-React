import React from 'react';
import '@/components/Texto/Texto.css';

export function Texto({ classe, children }) {
    return (
        <p className={classe}>{children}</p>
    );
}