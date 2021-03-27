import styled from 'styled-components';
import icon from '../../assets/Search-Icon.svg';


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    padding-right: 40px;
    box-shadow: 0 3px 5px gray;
`;

export const Logo = styled.img`
    margin-left: 40px;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Input = styled.input`
    width: 500px;
    height: 50px;
    border-radius: 10px;
    border: none;
    padding: 0 60px 0 20px;
    font-size: 25px;
    background: #F4F1F1 url(${ icon }) no-repeat right center;
    background-position-x: 450px;
`;