//? Imports Zoon

//*     Import CSS File
import "./AddOrder.css"

//*     Import Use State Hook
import { useState , useEffect , useContext } from "react";

//*     Import Component
import { TextField , Button } from "@mui/material";
import { TAlert } from "../Context/Alert";


//*     Import Icons
import { BsBell } from "react-icons/bs";

export default function AddOrder() {
    
    const [order,setOrder] = useState("")
    const [dis,setDis] = useState(true)

    const func = useContext(TAlert)

    useEffect(()=>{
        if (order != "") {
            setDis(false)
        } else {
            setDis(true)
        }
    },[order])

    function fetchData() {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({"Orders": order});

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow" ,
            credential : "include"
        };

        fetch("/Order/AddNewOrder", requestOptions)
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
        <div className="AddOrder">
            <h2 style={{display : "flex" , alignItems : "center"}}> <BsBell size={25} /> Add New Order</h2>
            <TextField label="Order" color="warning" variant="filled" fullWidth value={order} onChange={(event)=>{
                setOrder(event.target.value)
            }} />
            <Button variant="contained" fullWidth disabled={dis} onClick={fetchData} color="warning">
                Add Order
            </Button>
                            
        </div>
    );
}

