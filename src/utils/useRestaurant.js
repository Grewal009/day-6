import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (id) => {

    const [restaurant, setRestaurant] = useState(null);
        
    useEffect(()=>{
        getRestaurant();
    },[]);

    async function getRestaurant(){
        const info = await fetch( FETCH_MENU_URL+ id);
        const json = await info.json();
        console.log(json?.data);
        setRestaurant(json?.data);
    }
    return restaurant;
}

export default useRestaurant;