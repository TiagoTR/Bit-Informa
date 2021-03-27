import React from 'react';
import { Wrapper, Logo, InputWrapper, Input } from './styles';
import logo from '../../assets/Logo.svg';

export default function Header() {
    return(
        <Wrapper>
            <Logo src={ logo } alt='logo'/>
            <InputWrapper>
                <Input placeholder='Buscar por uma moeda'/>
            </InputWrapper>
        </Wrapper>
    );
};