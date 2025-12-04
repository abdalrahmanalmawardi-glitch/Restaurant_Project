//? Imports Zoon

//*     Import CSS File
import "./About.css"

//*     Import Components
import LocationComponent from "../Location/Location";
import ConnectionComponent from "../Connection/Connection";



export default function About() {
    
    return (
        <div className="About">

            <div className="AboutFDiv">
                <h1>Mawardi Resturant</h1>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque officiis sit itaque soluta delectus molestiae , fugiat officia debitis blanditiis commodi provident facere , ipsa voluptates , Facere temporibus voluptatum iste illo corrupti.</h2>
                <h2>A lot of food Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, assumenda!</h2>
            </div>

            <LocationComponent />

            <ConnectionComponent />

        </div>
    );
}
