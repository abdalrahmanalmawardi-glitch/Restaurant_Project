//? Imports Zoon

//*     Import CSS file
import "./Location.css"

//*     Import Location Icon
import { CiLocationOn } from "react-icons/ci" 

//*     Import Image
import Image from "../../assets/Tow_Pizza.png"

export default function LocationComponent() {
    
    return (
        <div className="LocationDiv">
            <div className="LocationImage" style={{backgroundImage : `url(${Image})`}}>

            </div>
            <div className="LocationImageS" style={{backgroundImage : `url(${Image})`}}>

            </div>
            
            <div className="LocationDivDiv">
                <CiLocationOn size={50} />
                <ul>
                    <li>Locations</li>
                    <li>XXXX-XXXX-XXXX</li>
                    <li>XXXX-XXXX-XXXX</li>
                    <li>XXXX-XXXX-XXXX</li>
                    <li>XXXX-XXXX-XXXX</li>
                    <li>XXXX-XXXX-XXXX</li>
                    <li>XXXX-XXXX-XXXX</li>
                </ul>
            </div>
            

        </div>
    )
}