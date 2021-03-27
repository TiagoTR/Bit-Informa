import styled from 'styled-components';
import icon from '../../assets/Coin-Symbol.svg';

export const ImageTop = styled.img`
    position: absolute;
    z-index: -1;

    @media(max-width: 790px) {width: 50%;}

    @media(max-width: 600px) {width: 40%;}
`;

export const CardsWrapper = styled.div`
    padding: 0 80px;
    display: flex;
    padding-top: 160px;

    @media (max-width: 1160px) {
        flex-direction: column;
        align-items: center;
        padding: 160px 0 0 0;
    }

    @media(max-width: 790px) {padding-top: 125px;}

    @media(max-width: 600px) {padding-top: 90px;}

    @media(max-width: 440px) {padding-top: 60px;}
`;

export const Card = styled.div`
    padding: 40px;
    border: 1px solid gray;
    width: ${ props => props.width };
    margin-right: ${ props => props.marginRight };
    border: 1px solid #767272;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #fff;
    border-radius: 25px;

    @media(max-width: 1160px) {
        &:first-child {margin: 0 0 50px 0;}
    }

    @media(max-width: 790px) {
        padding: 20px;
    }

    @media(max-width: 560px) {
        width: 307px;
    }
`;

export const TopCard = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.img`
    background: url(${ icon }) no-repeat center center;
    margin-right: 10px;
`;

export const TitleCoin = styled.span`
    font-size: 20px;
    font-weight: bold;
    width: 211px;

    @media(max-width: 790px) {font-size: 14px;}
`;

export const ValueCard = styled.p`
    font-weight: bold;
    font-size: 24px;
    margin-top: 10px;

    @media(max-width: 790px) {font-size: 16px;}
`;

export const Line = styled.hr`
    width: ${ props => props.width };
    margin-left: ${ props => props.marginLeft };
`;

export const Description = styled.p`
    margin-top: ${ props => props.marginTop };
    font-size: 18px;
    color: #858383;

    @media(max-width: 790px) {font-size: 12px;}
`;

export const FooterCard = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 80px;
`;

export const Text = styled.p`
    color: #2777C0;
    margin-right: 5px;

    @media(max-width: 560px) {
        font-size: 12px;
    }
`;

export const TextTime = styled.p`
    width: 70%;
    max-width: 70%;
    text-align: right;
    vertical-align: bottom;
    margin-top: 15px;
    font-weight: bold;

    @media(max-width: 790px) {font-size: 14px;}

    @media(max-width: 560px) {font-size: 10px}
`;

export const InfoCard = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    padding: 0 10px;
`;

export const TextInfo = styled.p`
    font-size: 18px;
    margin: 0 10px 0 25px;

    @media(max-width: 790px) {font-size: 12px;}
`;

export const ValueInfo = styled.p`
    font-size: 14px;
    text-decoration: underline;
    color: #E4A22B;
    font-weight: 600;

    @media(max-width: 790px) {font-size: 10px;}
`;

export const ImageBottom = styled.img`
    position: absolute;
    margin-top: -40px;
    z-index: -1;

    @media(max-width: 790px) {
        width: 80%;
        margin-top: -20px;
    }

    @media(max-width: 600px) {width: 50%;}
`;