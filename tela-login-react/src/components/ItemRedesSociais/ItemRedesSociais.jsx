import React from 'react';
import './ItemRedesSociais.css';

export function ItemRedesSociais({ link, nome }) {
    return (
        <li>
            <a href={link}>
                <img src={`./img/${nome}.svg`} alt={`ícone do ${nome}`} />
                {nome}
            </a>
        </li>
    )
}