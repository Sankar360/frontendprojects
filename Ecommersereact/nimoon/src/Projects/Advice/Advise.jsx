import {useEffect, useState} from 'react'
import "./Advise.css"
export const Advise = () => {
    const[advice,setAdvice]=useState("Please click button to get advice");
    const[count,setCount]=useState(0)
    
    async function getadvice(){
        const res=await fetch("https://api.adviceslip.com/advice");
        const data=await res.json();
        /* console.log(data) */
        setAdvice(data.slip.advice)
        setCount((c)=>
            c+1
        )
    }

    useEffect(function(){
        getadvice();
    },[])
    return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getadvice}>Get advise</button>
        <Counter count={count}/>
    </div>
  )
}

function Counter(props){
    const {count}=props
    return <p>you have read <b>{count}</b> pieces of update </p>
}
