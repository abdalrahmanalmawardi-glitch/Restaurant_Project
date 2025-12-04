//? Imports Zoon

//*     Import Link
import { Link } from "react-router-dom";

//*     Import IMG for HomeTopImg
import HomeImage from "../../assets/Pizza_Big_Center.png"

//*     Import menu icon
import { BiMenu } from "react-icons/bi";

//*     Import CSS file
import "./Home.css"

//*     Imports Images
import Pizza from "../../assets/Pizza.png";
import Pizza2 from "../../assets/Pizza2.png";
import Burger from "../../assets/Burger.png";
import HotDog from "../../assets/HotDog.png";
import Potatos from "../../assets/Potato1.png";
import Potato2 from "../../assets/Potato2.png";

//*     Import Components
import LocationComponent from "../Location/Location";
import ConnectionComponent from "../Connection/Connection";
import AddOrder from "../AddOrder/AddOrder";


export default function Home() {

    return (
        <div>

            <HomeTopImg />

            <HomeMenu />

            <AddOrder />

            <LocationComponent />

            <ConnectionComponent />

        </div>
    );
}

//*     IMG component
function HomeTopImg() {
    
    return (
        <div className="HomeTopImg" style={{
            backgroundImage : `url(${HomeImage})` , backgroundPosition : "center" ,
             backgroundSize : "contain" , width : "100%"
            }}></div>
    );
}

//*     HomeMenu Component
function HomeMenu() {
    
    return(
        <div className="HomeMenu">

            <h1> <BiMenu /> Menu</h1>

            <div className="HomeMenuImagesContainers">

                <HomeMenuItem p={"Pizza"} img={Pizza} />
                <HomeMenuItem p={"Pizza"} img={Pizza2} />
                <HomeMenuItem p={"Burger"} img={Burger} />
                <HomeMenuItem p={"HotDog"} img={HotDog} />
                <HomeMenuItem p={"Potato"} img={Potatos} />
                <HomeMenuItem p={"Potato"} img={Potato2} />

            </div>

            <h2 style={{color : "#000" , textAlign : "end" , margin : "5px 80px"}}>
                <Link to={"/Menu"} style={{color : "#000" , textDecoration : "solid #000 3px" }}>{" See All >>>"}</Link>
            </h2>

        </div>
    );
}

//*     HomeMenuItem Component
function HomeMenuItem({p,img}) {
    
    return (
        <div className="HomeMenuItem">
            <div style={{
            backgroundImage : `url(${img})` , backgroundPosition : "center" ,
             backgroundSize : "contain" 
            }}></div>
            <p>{p}</p>
        </div>
    );
}