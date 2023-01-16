import RestaurantCard from "./RestaurantCard";
import { Restaurants } from "../constants";
import { useState } from "react";

function filterData(searchText, allRestaurants){
    return  allRestaurants.filter(
        (restaurant)=>restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
}


const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState(Restaurants);
    const [fliteredRestaurant, setFliteredRestaurant] = useState(Restaurants);

    return (
        <>
            <div className="search-input-btn">
                <input type="text" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />

                <button onClick={()=>{
                    const newData = filterData(searchText, allRestaurants);
                    setFliteredRestaurant(newData);
                    console.log(fliteredRestaurant);
                    console.log(newData);
                    
                    
                }}>Submit</button>
            </div>
            <div className="body">
                {
                    // <RestaurantCard restaurant={Restaurants[0]}/>
                    // <RestaurantCard restaurant={Restaurants[1]}/>
                    // <RestaurantCard restaurant={Restaurants[2]}/>
                    // <RestaurantCard restaurant={Restaurants[3]}/>
                    // <RestaurantCard restaurant={Restaurants[4]}/>

                    fliteredRestaurant.map((r,index)=>{
                      return  <RestaurantCard {...r.data} key={r.data.id}/>
                    })
                }




            </div>
        </>    
    );
}

export default Body;