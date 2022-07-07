import React,{useState} from "react";
import "./style.css"
function App() {
  const [val,setVal]=useState('');
  const [result,setResult]=useState('0');
  const operation = (e) => {
    const operators=['+','-','/','*','.'];
    var onclickk=false;
    if(e.target.innerText=="Clear")
    {
      if(val=="")
      {
        alert("there is nothing to clear... please enter something");
      }
      setVal('');
    }
    else if(operators.includes(val.slice(-1)) && operators.includes(e.target.innerText))
    {
      return ;
    }
    else if(val==="" && operators.includes(e.target.innerText))
    {
      return;
    }
    else if(e.target.innerText=="C")
    {
      if(val=="")
      {
        alert("there is nothing to clear... please enter something");
      }
      else if(onclickk==true)
      {
        setVal('');
      }
      else{
      setVal(val.slice(0,-1));
      }
    }
    else if(e.target.innerText=="=")
    {
      if(val=='')return ;
      if(!operators.includes(val.slice(-1)))
      {
      // setResult(eval(val)+'');
      setVal(eval(val)+"");
      onclickk=true;
    }
    else{
      alert("please enter valid input")
    }
  }
    else
    {
      setVal(val+e.target.innerText);
    }
  };
  return (
    <>
     <div className="container">
      <div className="container-1">
      <div className="wrapper">
        <div className="screen">
          {val}
        </div>
        <div className="btns">
        <div className="bnt Clear"  onClick={operation} >Clear</div>
        <div className="bnt C"  onClick={operation}>C</div>
        <div className="bnt"  onClick={operation}>/</div>
        <div className="bnt"  onClick={operation}>7</div>
        <div className="bnt"  onClick={operation}>8</div>
        <div className="bnt"  onClick={operation}>9</div>
        <div className="bnt"  onClick={operation}>+</div>
        <div className="bnt"  onClick={operation}>4</div>
        <div className="bnt"  onClick={operation}>5</div>
        <div className="bnt"  onClick={operation}>6</div>
        <div className="bnt"  onClick={operation}>-</div>
        <div className="bnt"  onClick={operation}>1</div>
        <div className="bnt"  onClick={operation}>2</div>
        <div className="bnt"  onClick={operation}>3</div>
        <div className="bnt"  onClick={operation}>*</div>
        <div className="bnt"  onClick={operation}>0</div>
       <div className="bnt"  onClick={operation}>.</div>
       <div className=" bnt equalto"onClick={operation}>=</div>
        </div>
      </div>
      </div>
     </div>
    </>
  );
}

export default App;
