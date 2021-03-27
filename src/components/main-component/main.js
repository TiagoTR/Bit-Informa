/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useContext } from 'react';
import * as Styles from './styles';
import CoinWrapper from '../../assets/Coin-Wrapper.svg';
import ArrowRight from '../../assets/Arrow-Right.svg';
import ArrowUp from '../../assets/Arrow-Up.svg';
import ArrowDown from '../../assets/Arrow-Down.svg';
import CashIcon from '../../assets/Cash-Icon.svg';
import SaleIcon1 from '../../assets/Sale-Icon-1.svg';
import SaleIcon2 from '../../assets/Sale-Icon-2.svg';
import ImageBottom from '../../assets/Image-Bottom.svg';
import StateContext from '../context';

export default function Main() {
    const { input, setInput } = useContext(StateContext);
    const [ticker, setTicker] = useState({
        high: '',
        low: '',
        vol: '',
        last: '',
        sell: '',
        buy: ''
    });

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://www.mercadobitcoin.net/api/${input}/ticker/`);
            const { ticker } = await response.json();
            setTicker({
                high: ticker.high,
                low: ticker.low,
                vol: ticker.vol,
                last: ticker.last,
                sell: ticker.sell,
                buy: ticker.buy
            });
        })();
    },[input]);

    return(
        <>
            <Styles.CardsWrapper>
                <Styles.Card width='340px' marginRight='45px'>
                    <Styles.TopCard>
                        <Styles.Icon src={ CoinWrapper } alt='coin-icon'/>
                        <Styles.TitleCoin>Bitcoin</Styles.TitleCoin>
                    </Styles.TopCard>
                    <Styles.ValueCard>R$ 309.499</Styles.ValueCard>
                    <Styles.Line />
                    <Styles.Description marginTop='30px'>{ ticker.vol } bitcoins negociados nas últimas 24hs</Styles.Description>
                    <Styles.Description marginTop='6px'>Um total de R$ 91.615.809,16</Styles.Description>
                    <Styles.FooterCard>
                        <Styles.Text>Veja mais</Styles.Text>
                        <img src={ ArrowRight } alt='arrow-icon'/>
                    </Styles.FooterCard>
                </Styles.Card>

                <Styles.Card width='75%'>
                    <Styles.TopCard>
                        <Styles.Icon src={ CoinWrapper } alt='coin-icon'/>
                        <Styles.TitleCoin>Bitcoin</Styles.TitleCoin>
                        <Styles.TextTime>Nas últimas 24hs</Styles.TextTime>
                    </Styles.TopCard>
                    <Styles.Line width='90%' marginLeft='45px'/>

                    <Styles.InfoCard>
                        <img src={ ArrowUp } alt='arrow-up'/>
                        <Styles.TextInfo>Maior preço negociado:</Styles.TextInfo>
                        <Styles.ValueInfo>{ ticker.high }</Styles.ValueInfo>
                    </Styles.InfoCard>

                    <Styles.InfoCard>
                        <img src={ ArrowDown } alt='arrow-up'/>
                        <Styles.TextInfo>Menor preço negociado:</Styles.TextInfo>
                        <Styles.ValueInfo>{ ticker.low }</Styles.ValueInfo>
                    </Styles.InfoCard>

                    <Styles.InfoCard>
                        <img src={ CashIcon } alt='arrow-up'/>
                        <Styles.TextInfo>Preço da última negociação:</Styles.TextInfo>
                        <Styles.ValueInfo>{ ticker.last }</Styles.ValueInfo>
                    </Styles.InfoCard>

                    <Styles.InfoCard>
                        <img src={ SaleIcon1 } alt='arrow-up'/>
                        <Styles.TextInfo>Menor preço de oferta de venda:</Styles.TextInfo>
                        <Styles.ValueInfo>{ ticker.sell }</Styles.ValueInfo>
                    </Styles.InfoCard>

                    <Styles.InfoCard>
                        <img src={ SaleIcon2 } alt='arrow-up'/>
                        <Styles.TextInfo>Maior preço de oferta de compra:</Styles.TextInfo>
                        <Styles.ValueInfo>{ ticker.buy }</Styles.ValueInfo>
                    </Styles.InfoCard>
                </Styles.Card>
            </Styles.CardsWrapper>
            <img src={ ImageBottom } alt='xxx'/>
        </>
    );
};