import React, { useState } from 'react';
import "./Password.css";

export const Password = () => {
    const[length,setLength]=useState(8);
    const[includeupper,setIncludeUpper]=useState(true);
    const[includelower,setIncludeLower]=useState(true);
    const[includenumber,setIncludeNumber]=useState(true);
    const[includesymbol,setIncludeSymbol]=useState(true);
    const[password,setPassword]=useState("");

    const generatepassword=()=>{
        let charset="";
        if (includeupper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includelower) charset +="abcdefghijklmnopqrstuvwxyz";
        if (includenumber) charset += "1234567890";
        if (includesymbol) charset += "!@#$%^&*()_=+";
        /* console.log(charset) */
        let generatedpassword=""
        for (let i=0; i<length;i++){
            const randomIndex=Math.floor(Math.random()*charset.length);
            generatedpassword += charset[randomIndex];
        }
        setPassword(generatedpassword);
    };

    const copy=()=>{
        navigator.clipboard.writeText(password);
        alert("password copied");
    };

  return (
        <div className="password-generater">
            <h2>Strong Password Generator</h2>
            <div className="input-group">
                <label htmlFor="num">Password Length:</label>
                <input type="number" id="num" value={length} 
                onChange={(e)=>{setLength(parseInt(e.target.value))}}/>
            </div>
            <div className="checkbox-group">
                <input type="checkbox"  id="upper" 
                checked={includeupper}
                onChange={(e)=>{setIncludeUpper(e.target.checked)}}/>
                <label htmlFor="upper">Include Uppercase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox"  id="lower" 
                checked={includelower}
                onChange={(e)=>{setIncludeLower(e.target.checked)}}/>
                <label htmlFor="lower">Include Lowercase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox"  id="number" 
                checked={includenumber}
                onChange={(e)=>{setIncludeNumber(e.target.checked)}}/>
                <label htmlFor="number">Include Number</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox"  id="symbol" 
                checked={includesymbol} 
                onChange={(e)=>{setIncludeSymbol(e.target.checked)}}/>
                <label htmlFor="symbol">Include Symbol</label>
            </div>
            <button className='generate-btn' onClick={generatepassword}>Generate Password</button>
            <div className="generated-password">
                <input type="text" readOnly value={password}/>
                <button className='copy-btn' onClick={copy}>Copy</button>
            </div>
        </div>
  )
}

