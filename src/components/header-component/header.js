import React, { useContext } from 'react';
import * as Styles from './styles';
import logo from '../../assets/Logo.svg';
import StateContext from '../context';
import SearchIcon from '../../assets/Search-Icon.svg';

export default function Header() {
    const { setInput, error, searchValue, setSearchValue } = useContext(StateContext);

    return(
        <Styles.Wrapper>
            <Styles.Logo src={ logo } alt='logo' />
            <Styles.InputWrapper>
                { error && <i className="fas fa-exclamation-circle"></i> }
                <Styles.Input 
                    value={ searchValue }
                    onChange={ e => setSearchValue(e.target.value.toUpperCase()) }
                    placeholder='Buscar por uma moeda. Ex: LTC'/>
                    <Styles.IconSearch src={ SearchIcon } alt='' onClick={ () => setInput(searchValue) }/>
            </Styles.InputWrapper>
        </Styles.Wrapper>
    );
};