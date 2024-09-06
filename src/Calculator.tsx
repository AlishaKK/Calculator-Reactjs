import React ,{useState} from "react";
 import "./Calculator.css"
//import "./cs.css"


const Calculator = () => {
    const [input, setInput] = useState<string>("")
    const handleButtonClick = (value:string)=>{
        setInput((preInput)=>preInput+value)
    }
    const handleClear = ()=>{
        setInput("")
    }
  const handleCalculate = () =>{
    try{
        setInput(eval(input).toString());  
    }catch(error){
        setInput("Error")
    }
  }  


  return(
    <>
    <div className="container">
    <div className="calculator">
        <div className="display">{input}</div>
    <div className="button">
        <button></button>
        <button className="AC"  onClick={handleClear}>AC</button>
   <button onClick={()=> handleButtonClick("%")}>%</button>
   <button onClick={()=> handleButtonClick("/")} className="operator">/</button>

   <button onClick={()=> handleButtonClick("9")}>9</button>
   <button onClick={()=> handleButtonClick("8")}>8</button>
   <button onClick={()=> handleButtonClick("7")}>7</button>
   <button onClick={()=> handleButtonClick("*")} className="operator">x</button>

   <button onClick={()=> handleButtonClick("6")}>6</button>
   <button onClick={()=> handleButtonClick("5")}>5</button>
   <button onClick={()=> handleButtonClick("4")}>4</button>
   <button onClick={()=> handleButtonClick("-")} className="operator">-</button>

   <button onClick={()=> handleButtonClick("3")}>3</button>
   <button onClick={()=> handleButtonClick("2")}>2</button>
   <button onClick={()=> handleButtonClick("1")}>1</button>
   <button onClick={()=> handleButtonClick("+")} className="operator">+</button>
    </div>

    <div className="bottom">
    <button className="zero" onClick={()=> handleButtonClick("0")}>0</button>
    <button onClick={handleCalculate} className="operator">=</button>
    <button className="operator" onClick={()=> handleButtonClick(".")}>.</button>
    </div>
    </div>
    </div>
    </>
  )
 
};

export default Calculator
