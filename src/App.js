import React, { createContext, useState } from 'react'
import './App.css';
import Navbar from './Navbar'

const first = createContext();


const App = () => {

  const [mode,setMode] = useState('light');

  const [alert,setAlert] = useState(null)

  const showalert=(message, type)=>{
          setAlert({
            message: message,
            type:type
          })
          setTimeout(() => {
            setAlert(null)
          }, 1500);
  }

  const toggelemode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showalert("well done you enable the dark mode", "success")
      
    }else{
      setMode('light')
      document.body.style.backgroundColor ='lightblue'
      showalert("hmmm... you enable the light mode","danger" )
     
    }
  }


  return (
    <>
    
    <first.Provider value={alert}>
  
      <Navbar mode={mode} toggelemode={toggelemode}/>
      
      </first.Provider>
    </>
  )
}
export default App;
export {first};


