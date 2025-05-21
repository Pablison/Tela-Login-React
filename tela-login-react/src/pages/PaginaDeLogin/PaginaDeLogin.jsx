import React from 'react';
import Titulo from '@/components/Titulo/Titulo';
import { Subtitulo } from '@/components/Subtitulo/Subtitulo';
import { CampoDeDigitacao } from '@/components/CampoDeDigitacao/CampoDeDigitacao';
import { Botao } from '@/components/Botao/Botao';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Texto } from '@/components/Texto/Texto';
import { ItemRedesSociais } from '@/components/ItemRedesSociais/ItemRedesSociais';
import { Link } from '@/components/Link/Link';
import imagemLogin from '@/assets/img/imagemLogin.png';
import '@/css/PaginaDeLogin.css';

export function PaginaDeLogin() {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('email ' + email);
        console.log('senha ' + senha);
    }

    return (
        <div className='container-login'>
            <img src={imagemLogin} className="imagem-login" alt='Uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect' />
            <section>
                <form onSubmit={handleSubmit}>
                    <Titulo>Login</Titulo>
                    <Subtitulo>Boas-vindas! Faça o seu login</Subtitulo>
                    <CampoDeDigitacao 
                        label='E-mail ou usuário'
                        tipo='email'
                        placeholder='Digite o seu e-mail ou usuário'
                        value={email}
                        setValor={setEmail}
                    />
                    <CampoDeDigitacao 
                        label='Senha'
                        tipo='password'
                        placeholder='Digite a sua senha'
                        value={senha}
                        setValor={setSenha}
                    />
                    <fieldset className='form__opcoes'>
                        <Checkbox />
                        <p>
                            <a href='#' aria-label='Recuperar senha esquecida'>Esqueci a senha</a>
                        </p>
                    </fieldset>
                    <Botao>Login</Botao>
                </form>
                <div className='container-links'>
                    <Texto classe='container-links__titulo'>ou entre com outras contas</Texto>
                    <ul>
                        <ItemRedesSociais link='https://www.github.com' nome='Github' />
                        <ItemRedesSociais link='https://www.google.com' nome='Google' />
                    </ul>
                    <Texto classe='container-links__texto'>Ainda não tem conta?</Texto>
                    <Link>Crie seu cadastro!</Link>
                </div>
            </section>
        </div>
    )
}