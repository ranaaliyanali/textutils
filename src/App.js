// import logo from './logo.svg';
import './App.css';
import About from './Component/About ';
import Navbar from './Component/Navbar';
import Text1 from './Component/Text1';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import{Switch, Route, Link, Redirect} from "react-router-dom";
import NotFound from './Component/NotFound';


function App() {
  const [Mode,setMode] = useState('light');
  const [alert,setalert] = useState(null)

  const toggle_mode = ()=>{
    if(Mode === 'light')
    {
        setMode('dark')
        document.body.style.background ='rgb(6 45 83)';
        showalert("success","Dark Mode is enable");
        // document.title = 'TEXTUTILE  DARK MODE';
    
        //   setInterval(()=>{
        //     document.title = 'TEXTUTILE  IS VIRUS MODE';
        //   },1000);
  }
    else{
      setMode('light')
      document.body.style.background ='white';
      showalert("success","light Mode is enable" );
      // document.title = 'TEXTUTILE  LIGHT MODE';
      
      // setInterval(()=>{
      //   document.title = 'TEXTUTILE  IS  NOT VIRUS MODE';
      // },1500);
    
    }
  }
//  let togle_1=()=>{
//     if (Mode==='light')
//     {
//       setMode('danger')
//       document.body.style.background ='green';
//       showalert("success","red mood has been enable")
//       document.title = 'TEXTUTILE  RED MODE';
//     }
//     else{
//       setMode('light')
//       showalert("success","light mood is enable")
//       document.body.style.background ='white';
//       document.title = 'TEXTUTILE  LIGHT MODE';
//     }
//   }
  
  const showalert=(type,message)=>{
    setalert({
      msg: message,
      type:type,
    });

  }
  // debugger;
  return (
    <>
      <Navbar Title="Texturtil"  Mode={Mode} togle={toggle_mode} />
      <Alert alert={alert}/>
      <div className='container my-3' >
        <Switch>
                <Route exact path="/about" >
                <About Mode={Mode}/>
                </Route>
                <Route path="/">
                  <Text1 exact heading="Enter Your Text Here" Mode={Mode} show_alert={showalert}/>
                </Route>
        </Switch>
        {/* <About Title={"saksads"}/> */}
      </div>
</>
  );
}

export default App;
