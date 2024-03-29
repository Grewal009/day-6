import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
    const {id} = useParams();
    //destructure on fly const {id} = useParams();

    const restaurant = useRestaurant(id);

    return  (!restaurant)? <Shimmer /> :(
        <div className="restaurant-menu">
            <div>
                <h1>Restaurant id - {id}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_CDN + restaurant?.cloudinaryImageId}/>
                <h3>{restaurant?.area}, {restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} ratings</h3>
                <h3>{restaurant?.costForTwoMsg}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>{
                        Object.values(restaurant.menu.items).map((item)=>
                        <li key={item.id}>{item.name}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;