import React from 'react';
import './Link.css';

export function Link({ children }) {
    return (
        <a href='#' className='container-links__link'>
            {children}
        </a>
    )
}