//? Imports Zoon


//*   import Hooks from react
import { useEffect, useState } from "react";

//*   import Pizza img
import PizzaIMG from "./assets/Pizza.png"

//*   import Routes & Route
import { Route , Routes } from "react-router-dom"; 

//*   import Component
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import ErrorComponent from "./Components/Error/ErrorComponent";
import LogIn, { CreatNewAccount } from "./Components/LogIn/LogIn";
import { Alert } from "@mui/material";
import { TAlert } from "./Components/Context/Alert";
import { GiFullPizza } from "react-icons/gi";


function App() {

  const [alert,setAlert] = useState([false,"No Thing"])
  
  useEffect(()=>{
    if(alert) {
      setTimeout(()=>{
        setAlert(false)
      },2000)
    }
  },[alert])

  return(
    <div className="App">

      <link rel="shortcut icon" href={PizzaIMG} type="image/x-icon" />

      <Header />
      <TAlert.Provider value={setAlert} >
        <Routes>

          <Route element={<Home />} path="/" />

          <Route element={<About />} path="/About" />
          
          <Route element={<LogIn />} path="/LogIn" />

          <Route element={<CreatNewAccount />} path="/CreateNewAccount" />

          <Route element={<Menu />} path="/Menu" />

          <Route element={<ErrorComponent />} path="*" />

        </Routes>

      </TAlert.Provider>

      {alert[0] ? <Alert  variant="filled" color="warning" icon={<GiFullPizza style={{color : "#fff"}} />} style={{position : "fixed" , 
        left : "0" , bottom : "0" , zIndex : "10" , color : "#fff"
      }} > {alert[1]} </Alert> : ""}

    </div>    
  );
}

export default App
