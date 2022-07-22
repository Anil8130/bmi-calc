import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData] = useState({
    weight:'',
    height:'',
  });
  let ftm;
  const [bmiResult,setbmiResult]=useState('');
  let bgcolor ="";
  const [bg,setBg] = useState(bgcolor);
 /* const colorText ="#000";
  const [textColor,settextColor]=useState(colorText);*/
  const [titleName,settitleName] = useState("");
  const getInput=(e)=>{
    const {value,name} =e.target;
    
    setData((prevValue)=>{
      return{
        ...prevValue,
        [name]:value,
      }
    }); 
  }
 const calBmi=()=>{
  ftm=(data.height * 0.3048);
  ftm=ftm ** 2;
  setbmiResult((data.weight/ftm).toFixed(1)); 
 
  }
  const getStatus=()=>{
    console.log(bmiResult);
    if(bmiResult < 18.5){
      setBg("#e59706");
      settitleName("Underweight");
    }else if(bmiResult < 24.9 && bmiResult >18.5){
      setBg("#76e21c");
      settitleName("Normal");
    }else if(bmiResult >25 && bmiResult < 29.9){
      setBg("#e25d1c");
      settitleName("Overweight");
    }else if(bmiResult > 29.9){
      setBg("#e21c1c");
      settitleName("Obesity");
    }else{
      setBg("");
      settitleName("");
    }
  }
  return (
    <div className="container">
    <div className="row">
    <div className="col-md-6">
      <h1>Count Your BMI</h1>
      {bmiResult && <span>BMI Count:{bmiResult}</span>}
      <input placeholder="Enter Your Body Weight" name="weight" onChange={getInput} /><br/>
      <input placeholder="Enter Your Height 5.3 as 5 feet 3 inch" name="height" onChange={getInput} /><br/>
      <button onClick={calBmi} className="btn">Calculate Bmi</button>
      <button onClick={getStatus} className="btn">Get BMI Status</button>
      {titleName && <div className="BmiResult" style={{backgroundColor: bg}}>
          Your BMI Score Is: {bmiResult}<br/>
          And Your Are {titleName}
      </div>}
    </div>
      <div className="col-md-6">
          <h2><b>BMI Categories:</b></h2>
          <ul>
              <li>Underweight = Below 18.5</li>
              <li>Normal weight = 18.5–24.9</li>
              <li>Overweight = 25–29.9</li>
              <li>Obesity = BMI of 30 or greater</li>
          </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
