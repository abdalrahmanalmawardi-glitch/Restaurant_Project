//? Import Zoon

//*     Import CSS File
import "./Menu.css"

//*     Import ICons
import { BiBookOpen , BiDrink } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuSalad , LuDessert } from "react-icons/lu";

//*     Import Components
import AddOrder from "../AddOrder/AddOrder";
import ConnectionComponent from "../Connection/Connection";

export default function Menu() {
    
    return(
        <div className="MenuPage" >

            <div className="MenuPageItem">

                <h1> <BiBookOpen /> Menu</h1>

                <div className="MenuPageItemContainer">

                    <MenuItem foods={["Big Pizza","Burger","Potato" , "Hot Dog" , "Small Pizza" , "Big Burger" , "Sausage" ]} title={<> <IoFastFoodOutline /> Fast Foods</>} />
                    
                    <MenuItem foods={["Vegetable Salad","Mushroom Salad","Vegetable Soup" , "Macaroni"]} title={<> <LuSalad /> Appetizers</>} />
                    
                    <MenuItem foods={["Cookies","Cakes","Cato" , "Croissant"]} title={<> <LuDessert /> Dessert</>} />
                    
                    <MenuItem foods={["Lemonada" , "Nescafe" ,"Tea","Natural Juice" , "Coffee"]} title={<> <BiDrink /> Drinks</>} />

                </div>

            </div>

            <AddOrder />

            <ConnectionComponent />

        </div>
    );
}


//*     Menu Item Component
function MenuItem({title,foods = []}) {
    
    const food = foods.map((tfood)=>{
        return (
            <li style={{listStyle : "none"}}>
                {tfood}
            </li>
        );
    })

    return (
        <div className="MenuPageContainerItem">

            <h2>{title}</h2>
        
            <ul>

                {food}

            </ul>

        </div>
    );
}