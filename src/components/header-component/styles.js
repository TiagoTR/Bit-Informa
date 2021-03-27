import styled from 'styled-components';

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
    align-items: center;

    i {
        font-size: 30px;
        margin-right: 5px;
        color: #eb4034;
    }
`;

export const Input = styled.input`
    width: 500px;
    height: 50px;
    border-radius: 10px 0 0 10px;
    border: none;
    padding: 0 20px;
    font-size: 25px;
    background: #F4F1F1;
`;

export const IconSearch = styled.img`
    cursor: pointer;
    padding: 9px;
    border-radius: 0 10px 10px 0;
    background: #F4F1F1;
`;