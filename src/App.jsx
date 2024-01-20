import { useState } from 'react'
import './App.css'

function App() {
  const [countryStatus, setcountryStatus] = useState(null)
  const [cityStatus, setcityStatus] = useState(null)
  const [passvalue , setpassvalue] = useState(null)
  const data = [
                {name : "india",code : "IN" , cities:["mumbai","delhi","uttarpradesh"]}
                ,{name : "pakistan",code : "PAK" , cities:["lahore","karachi"]}
                ,{name : "usa",code : "us" , cities:["california","zoomland","newyork"]}
              ]
  const showCities = (e)=>{
    setcityStatus(true)
    setpassvalue(e)
  }
  const cityFunc = ()=>{
    if (cityStatus){
      return passvalue.map((ele)=>{
        return <div>{ele}</div>
    })
    }
    
  }
     
  const showFlag = ()=>{ setcountryStatus(true)};
  const showCountry = () => {
    if (countryStatus) {
      return  data.map((e) => {
        return <div /*key={e.code}*/><button onClick={()=>{showCities(e.cities)}}>{e.name}</button></div>;
      });
    }
    
  };
  
  

  return (
    <>
        <label>Please select country <button onClick={showFlag}>v</button></label>
        <div style={{ display: 'flex' }}>
          <div>{showCountry()}</div>
          <div>{cityFunc()}</div>
        </div>
        
    </>
  )
  }

export default App
