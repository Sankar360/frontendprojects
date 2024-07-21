import {useState} from 'react'
import "./Bmicalculator.css";

export const Bmicalculator = () => {
    const[height,setHeight]=useState("");
    const[weight,setWeight]=useState("");
    const[bmi,setBmi]=useState(null);
    const[status,setStatus]=useState("");
    const[errormessage,setErrorMessage]=useState("  ");

    const weightcheck=()=>{
        const isvalidheight=/^\d+$/.test(height);
        const isvalidweight=/^\d+$/.test(weight);


        if(isvalidheight && isvalidweight){
            const heightInMeters=height/100;
            const bmivalue=weight/(heightInMeters*heightInMeters);
            setBmi(bmivalue.toFixed(2));
            if(bmivalue<18.5){
                setStatus("Underweight")
            }else if(bmivalue>18.5 && bmivalue<24.9){
                setStatus("normal weight")
            }else if(bmivalue>24.9 && bmivalue<29.9){
                setStatus("Overweight")
            }else{
                setStatus("Obese")
            }
            setErrorMessage("")  
        }else{
            setBmi(null)
            setStatus("")
            setErrorMessage("Please Enter Valid numeric values for height and weight")
        }
    }

    const clearall=()=>{
        setHeight("");
        setWeight("");
        setBmi(null);
        setStatus("");
    }

    return (
        <div className='bmi-container'>
            <div className="box"></div>
            <div className="data">
                <h1>Bmi Calculator</h1>

                {errormessage && <div className="error">{errormessage}</div>}
                <div className="input-container">
                    <label htmlFor='height'>Height(cm):</label>
                    <input type="text" id='height' value={height} onChange={(e)=>{setHeight(e.target.value)}} />
                </div>
                <div className="input-container">
                    <label htmlFor='weight'>Weight(kg):</label>
                    <input type="text" id='weight' value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
                </div>
                <button onClick={weightcheck}>Calculate BMI</button>
                <button onClick={clearall}>clear</button>
                {bmi !== null && (
                    <div className="result">
                        <p>Your BMI is:{bmi}</p>
                        <p>Status:{status}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
