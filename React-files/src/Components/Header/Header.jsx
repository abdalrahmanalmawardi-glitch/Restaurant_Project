//? Imports zoon

//* Import Link
import { Link } from "react-router-dom";

//* Import CSS file
import "./Header.css"

//* Import Icons
import { HiHome } from "react-icons/hi"
import { BiQuestionMark } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";

export default function Header() {
    
    return(
        <div className="AppHeader">

            <h1>Mawardi</h1>

            <div className="AppHeaderDiv">

                <HeaderIcon p={"Home"} link="/" icon={<HiHome className="AppHeaderDivIconIc" size={27} />} />
                
                <HeaderIcon p={"About"} link="/About" icon={<BiQuestionMark className="AppHeaderDivIconIc" size={27} />} />

                <HeaderIcon p={"LogIn"} link="/LogIn" icon={<BiLogIn className="AppHeaderDivIconIc" size={27} />} />

            </div>
            
        </div>
    )
}

//?      OTHER COMPONENT 
function HeaderIcon({icon,p,link = "/"}) {
    
    return(
        <div className="AppHeaderDivIcon">
            <Link className="TheHeadeLink" to={link}>
                {icon} 
                <p className="AppHeaderDivIconP">{p}</p>
            </Link>
        </div>
    );
}
