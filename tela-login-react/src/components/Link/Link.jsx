import React from 'react';
import '@/components/Link/Link.css';

export function Link({ children }) {
    return (
        <a href='#' className='container-links__link'>
            {children}
        </a>
    )
}