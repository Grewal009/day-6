import RestaurantCard from "./RestaurantCard";
import { Restaurants } from "../constants";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper"; 
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";



const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [fliteredRestaurant, setFliteredRestaurant] = useState([]);

    const {user, setUser} = useContext(UserContext);

    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const list = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING");
        const newList = await list.json();
        console.log(newList);
        setAllRestaurants(newList?.data?.cards[2]?.data?.data?.cards);
        console.log(allRestaurants);
        setFliteredRestaurant(newList?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline();
    if(!isOnline){
        return <h1>offline, please check your internet connection.</h1>
    }

    return allRestaurants?.length === 0 
            ? <Shimmer />
            : (
        <>
            <div className="search-input-btn">
                <input type="text" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                <button onClick={()=>{
                    const newData = filterData(searchText, allRestaurants);
                    setFliteredRestaurant(newData);
                    console.log(fliteredRestaurant);
                    console.log(newData);
                }}>Submit</button>

                <input type="text" placeholder="name" value={user.name} onChange={(e)=>setUser({...user, name : e.target.value})}/>
                <input type="text" placeholder="email" value={user.email} onChange={(e)=>setUser({...user, email : e.target.value})}/>
            </div>
            <div className="body">
                {
                    // <RestaurantCard restaurant={Restaurants[0]}/>
                    // <RestaurantCard restaurant={Restaurants[1]}/>
                    // <RestaurantCard restaurant={Restaurants[2]}/>
                    // <RestaurantCard restaurant={Restaurants[3]}/>
                    // <RestaurantCard restaurant={Restaurants[4]}/>
                    (fliteredRestaurant?.length === 0) 
                    ?<h2>No result found!!!</h2>
                    :fliteredRestaurant?.map((r,index)=>{
                      return(  
                      <Link className="link-body" to={"/restaurant/"+r.data.id} key={r.data.id}>
                      <RestaurantCard {...r.data} />
                      </Link>
                      )
                    })
                }




            </div>
        </>    
    );
}

export default Body;