//? Imports Zoon

//*     Import CSS file
import "./Connection.css"

//*     Import Icons
import { BiMobile , BiPhone } from "react-icons/bi";
import { FaFax } from "react-icons/fa";
import { BsFacebook , BsYoutube } from "react-icons/bs";
import { MdWeb } from "react-icons/md";

export default function ConnectionComponent() {
    
    return (
        <div>

            <ConnectionComponentItem f={<><BiMobile /> Mobile</>} s={"+99999999"} />

            <ConnectionComponentItem f={<><BiPhone /> Phone</>} s={"+99999999"} />

            <ConnectionComponentItem f={<><FaFax /> Fax</>} s={"XXX-XXX-XXX"} />

            <ConnectionComponentItem f={<><BsFacebook /> FaceBook</>} s={"facebook.com"} />

            <ConnectionComponentItem f={<><BsYoutube /> YouTube</>} s={"youtube.com"} />

            <ConnectionComponentItem f={<><MdWeb /> WebSite</>} s={"www.example.com"} />


        </div>
    );
}

//*     Connection Item Component

function ConnectionComponentItem({f,s}) {
    return (
        <div className="ConnectionComponentItem">
            <p> {f} :</p>
            <p> {s} </p>
        </div>
    );
}