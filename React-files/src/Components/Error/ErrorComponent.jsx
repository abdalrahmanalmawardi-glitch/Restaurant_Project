//? Imports Zoon

//*     Import CSS File
import { Link } from "react-router-dom";
import "./ErrorComponent.css"

//*     Import Icon
import { GiFullPizza } from "react-icons/gi";


export default function ErrorComponent() {
    
    return (
        <div className="ErrorComponent">

            <div>

                <h1 style={{fontSize : "50px" , 
                    display : "flex" , alignItems : "center" ,justifyContent : "center"
                }}>
                    4<GiFullPizza />4 Error
                </h1>

                <h1>Not Defined</h1>

                <h2>Pleas inter an exsit path</h2>

                <h2>Mawardi Resturant</h2>

                <h1><Link to={"/"} style={{color : "#ffa696ff"}}>Home</Link></h1>

            </div>

        </div>
    );
}

