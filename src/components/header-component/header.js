import React, { useContext } from 'react';
import * as Styles from './styles';
import logo from '../../assets/Logo.svg';
import icon from '../../assets/Search-Icon.svg';
import StateContext from '../context';

export default function Header() {
    const { input, setInput } = useContext(StateContext);

    function handleRequest() {
        if(input) {
            alert(input);
        }else {
            alert("Informe uma moeda!");
        }
    };

    return(
        <Styles.Wrapper>
            <Styles.Logo src={ logo } alt='logo'/>
            <Styles.InputWrapper>
                <Styles.Input 
                    value={ input }
                    onChange={ e => setInput(e.target.value) }
                    placeholder='Buscar por uma moeda'/>
                <img src={ icon } alt='' onClick={ handleRequest }/>
            </Styles.InputWrapper>
        </Styles.Wrapper>
    );
};