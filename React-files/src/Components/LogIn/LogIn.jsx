//? Imports Zoon

//*     Import CSS File 
import "./LogIn.css"

//*     Import Hook From React
import { useEffect, useState , useContext } from "react";

//*     Import IMG
import IMG from "../../assets/Pizza_Big_Center.png"

//*     Import Components
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { TAlert } from "../Context/Alert";


export default function LogIn() {
        
    const [data,setData] = useState({UName : "" , UEmail : "" , UPassword : ""})

    const [dis , setDis] = useState(true)

    const func = useContext(TAlert)

    useEffect(()=>{
        if (data.UName != "" && data.UEmail != "" && data.UPassword != "" ) {
            setDis(false)
        } else {
            setDis(true)
        }
    },[data])

    function fetchData() {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({"UName": data.UName ,"UEmail": data.UEmail ,"UPassword": data.UPassword });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" ,
        credential : "include"
    };

    fetch("/User/SignIn", requestOptions)
    .then((response) => response.text())
    .then((result)=>{
        func([true,result])
    })
    .catch((error) =>{
        console.log(error);
        func([true," An Error "])
        
    });

        }

    return (
        <div className="LogInComponent">

            <div className="LogInComponentImage" style={{backgroundImage : `url(${IMG})`}}></div>

            <div className="LogInComponentDiv">
                <TextField fullWidth color="warning" variant="filled" label="User Name"  
                value={data.UName} onChange={(event)=>{
                    setData({...data , UName : event.target.value})
                }}
                />
                <TextField fullWidth color="warning" variant="filled" label="Email"  
                value={data.UEmail} onChange={(event)=>{
                    setData({...data , UEmail : event.target.value})
                }}
                />
                <TextField fullWidth color="warning" variant="filled" label="PassWord"  
                value={data.UPassword} onChange={(event)=>{
                    setData({...data , UPassword : event.target.value})
                }}
                />
                <Button disabled={dis} fullWidth variant="contained" color="warning"onClick={fetchData}>
                    Log In
                </Button>
                <Link to={"/CreateNewAccount"} style={{width : "100%"}}>
                    <Button fullWidth variant="contained" color="warning">
                        Create New Account
                    </Button>
                </Link>
            </div>

        </div>
    );
}


//* Creat New Account Coponent

export function CreatNewAccount() {
    
    
    const [data,setData] = useState({UName : "" , UEmail : "" , UPassword : ""})

    const [dis , setDis] = useState(true)

    const func = useContext(TAlert)

    useEffect(()=>{
        if (data.UName != "" && data.UEmail != "" && data.UPassword != "" ) {
            setDis(false)
        } else {
            setDis(true)
        }
    },[data])

        function fetchData() {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({"UName": data.UName ,"UEmail": data.UEmail ,"UPassword": data.UPassword });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        credential : "include"
    };

    fetch("/User/AddNewAccount", requestOptions)
    .then((response) => response.text())
    .then((result)=>{
        func([true,result])
    })
    .catch((error) =>{
        console.log(error);
        func([true," An Error "])
        
    });
        }

    return (
        <div className="LogInComponent">

            <div className="LogInComponentImage" style={{backgroundImage : `url(${IMG})`}}></div>

            <div className="LogInComponentDiv">
                <TextField fullWidth color="warning" variant="filled" label="User Name"  
                value={data.UName} onChange={(event)=>{
                    setData({...data , UName : event.target.value})
                }}
                />
                <TextField fullWidth color="warning" variant="filled" label="Email"  
                value={data.UEmail} onChange={(event)=>{
                    setData({...data , UEmail : event.target.value})
                }}
                />
                <TextField fullWidth color="warning" variant="filled" label="PassWord"  
                value={data.UPassword} onChange={(event)=>{
                    setData({...data , UPassword : event.target.value})
                }}
                />
                <Button disabled={dis} onClick={fetchData} fullWidth variant="contained" color="warning" >
                    Create
                </Button>
                
            </div>

        </div>
    );
    
}




/* 

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({"UName":"Ahmed","UEmail":"example@gmail.com","UPassword":"asdfasd"});

const requestOptions = {
method: "POST",
headers: myHeaders,
body: raw,
redirect: "follow"
};

fetch("localhost:5000/User/SignIn", requestOptions)
.then((response) => response.text())
.then((result) => console.log(result))
.catch((error) => console.error(error));

*/