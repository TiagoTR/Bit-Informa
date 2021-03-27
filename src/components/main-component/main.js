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
    const { input, setError } = useContext(StateContext);
    const [ticker, setTicker] = useState({
        high: '',
        low: '',
        vol: '',
        last: '',
        sell: '',
        buy: '',
        price: '',
        quantity: ''
    });
    const [domains] = useState({
        ACMFT: 'Fan Token ASR',
        ACORDO01: 'None',
        ASRFT: 'Fan Token ASR',
        ATMFT: 'Fan Token ATM',
        BCH: 'Bitcoin Cash',
        BTC: 'Bitcoin',
        CAIFT: 'Fan Token CAI',
        CHZ: 'Chiliz',
        ETH: 'Ethereum',
        GALFT: 'Fan Token GAL',
        IMOB01: 'None',
        JUVFT: 'Fan Token JUV',
        LINK: 'CHAINLINK',
        LTC: 'Litecoin',
        MBCONS01: 'Cota de Consórcio 01',
        MBCONS02: 'Cota de Consórcio 02',
        MBFP01: 'None',
        MBFP02: 'None',
        MBPRK01: 'Precatório MB SP01',
        MBPRK02: 'Precatório MB SP02',
        MBPRK03: 'Precatório MB BR03',
        MBPRK04: 'Precatório MB RJ04',
        MBVASCO01: 'MBVASCO01',
        MCO2: 'MCO2',
        OGFT: 'Fan Token ASR',
        PAXG: 'PAX Gold',
        PSGFT: 'Fan Token PSG',
        USDC: 'USD Coin',
        WBX: 'WiBX',
        XRP: 'XRP',
    });
    const [date, setDate] = useState({
        day: new Date().getDate() - 1,
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://www.mercadobitcoin.net/api/${ input ? input : 'BTC' }/ticker/`);
                const { ticker } = await response.json();

                const summary = await fetch(`https://www.mercadobitcoin.net/api/${ input ? input : 'BTC' }/day-summary/${ date.year }/${ date.month }/${ date.day }/`);
                const info = await summary.json();

                setTicker({
                    high: ticker.high,
                    low: ticker.low,
                    vol: ticker.vol,
                    last: ticker.last,
                    sell: ticker.sell,
                    buy: ticker.buy,
                    price: info.closing.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                    quantity: info.quantity
                });

                setError(false);
            }catch(err) {
                setError(true);
                setTicker({
                    high: '',
                    low: '',
                    vol: '',
                    last: '',
                    sell: '',
                    buy: ''
                });
            }
        })();
    },[input, setError, date]);

    return(
        <>
            <Styles.CardsWrapper>
                <Styles.Card width='350px' marginRight='45px'>
                    <Styles.TopCard>
                        <Styles.Icon src={ CoinWrapper } alt='coin-icon'/>
                        <Styles.TitleCoin>{ domains[input ? input: 'BTC'] }</Styles.TitleCoin>
                    </Styles.TopCard>
                    <Styles.ValueCard>{ ticker.price }</Styles.ValueCard>
                    <Styles.Line />
                    <Styles.Description marginTop='30px'>{ ticker.vol } { domains[input ? input: 'BTC'] } negociados nas últimas 24hs</Styles.Description>
                    <Styles.Description marginTop='6px'>Um total de R$ { ticker.quantity }</Styles.Description>
                    <Styles.FooterCard>
                        <Styles.Text>Veja mais</Styles.Text>
                        <img src={ ArrowRight } alt='arrow-icon'/>
                    </Styles.FooterCard>
                </Styles.Card>

                <Styles.Card width='75%'>
                    <Styles.TopCard>
                        <Styles.Icon src={ CoinWrapper } alt='coin-icon'/>
                        <Styles.TitleCoin>{ domains[input ? input: 'BTC'] }</Styles.TitleCoin>
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