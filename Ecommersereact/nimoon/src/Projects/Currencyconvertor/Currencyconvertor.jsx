import React, { useEffect, useState } from 'react'
import "./Currencyconvertor.css";
import axios from "axios";

export const Currencyconvertor = () => {
    const[amount,setAmount]=useState(1);
    const[fromcurrency,setFromCurrency]=useState("USD");
    const[tocurrency,setToCurrency]=useState("INR");
    const[convertamount,setConvertAmount]=useState(null);
    const[exchangerate,setExchangeRate]=useState(null);

    useEffect(()=>{
        const getExchangeRate = async()=>{
            try{
                let url=`https://api.exchangerate-api.com/v4/latest/${fromcurrency}`
                const res=await axios.get(url);
                /* console.log(res) */
                setExchangeRate(res.data.rates[tocurrency]);
            }catch(error){
                console.error("error fetching exchange rate:",error);
            }
        }
        getExchangeRate()    
},[fromcurrency,tocurrency]);

useEffect(()=>{
    if(exchangerate!==null){
        setConvertAmount((amount*exchangerate).toFixed(2))
    }
},[amount,exchangerate]);

    const handleamountchange=(e)=>{
        const value=parseFloat(e.target.value);
        setAmount(isNaN(value)?0:value);
    }
    return (
        <div className='box-container'>
            <div className="box"></div>
            <div className="data">
                <h1>Currency Convertor</h1>
                <div className="input-currency">
                    <label htmlFor="amount">amount</label>
                    <input type="number" id="amount" onChange={handleamountchange} value={amount} />
                </div>
                <div className="input-currency" >
                        <label htmlFor="fromcurrency">From Currency</label>
                        <select id="fromcurrency"  value={fromcurrency} onChange={(e)=>{setFromCurrency(e.target.value)}}>
                            <option value="USD">USD - United States Doller</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - British Bound Sterling</option>
                            <option value="JPY">JPY - Japanesh Yen</option>
                            <option value="AUD">AUD - Australian Doller</option>
                            <option value="CAD">CAD - Canadian Doller</option>
                            <option value="CNY">CNY - Chinesh Yuan</option>
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="BRL">BRL - Brazillian Real</option>
                            <option value="ZAR">ZAR - South African Rand</option>
                        </select>
                </div>
                <div className="input-currency">
                        <label htmlFor="tocurrency">To Currency</label>
                        <select id="tocurrency" value={tocurrency} onChange={(e)=>{setToCurrency(e.target.value)}}>
                            <option value="USD">USD - United States Doller</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - British Bound Sterling</option>
                            <option value="JPY">JPY - Japanesh Yen</option>
                            <option value="AUD">AUD - Australian Doller</option>
                            <option value="CAD">CAD - Canadian Doller</option>
                            <option value="CNY">CNY - Chinesh Yuan</option>
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="BRL">BRL - Brazillian Real</option>
                            <option value="ZAR">ZAR - South African Rand</option>
                        </select>
                </div>
                <div className="result">
                    <p>{amount} {fromcurrency} is equal to {convertamount} {tocurrency}</p>
                </div>
            </div>
        </div>
    )
}
