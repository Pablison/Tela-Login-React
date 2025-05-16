import React from 'react';
import '@/components/ItemRedesSociais/ItemRedesSociais.css';
import githubIcon from '@/assets/img/Github.svg';
import googleIcon from '@/assets/img/Google.svg';

export function ItemRedesSociais({ link, nome }) {
    const icons = {
        Github: githubIcon,
        Google: googleIcon,
    };

    return (
        <li>
            <a href={link}>
                <img src={icons[nome]} alt={`ícone do ${nome}`} />
                {nome}
            </a>
        </li>
    );
}