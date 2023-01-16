import RestaurantCard from "./RestaurantCard";
import { Restaurants } from "../constants";



const Body = () => {
    return (
        <>
            <div className="search-input-btn">
                <input type="text" placeholder="Search"  />
                <button>Submit</button>
            </div>
            <div className="body">
                {
                    // <RestaurantCard restaurant={Restaurants[0]}/>
                    // <RestaurantCard restaurant={Restaurants[1]}/>
                    // <RestaurantCard restaurant={Restaurants[2]}/>
                    // <RestaurantCard restaurant={Restaurants[3]}/>
                    // <RestaurantCard restaurant={Restaurants[4]}/>

                    Restaurants.map((r,index)=>{
                      return  <RestaurantCard {...r.data} key={r.data.id}/>
                    })
                }




            </div>
        </>    
    );
}

export default Body;