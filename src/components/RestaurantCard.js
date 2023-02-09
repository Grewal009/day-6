import {IMG_CDN} from '../constants'
import { RESTAURANT_API } from '../constants';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';

    const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
       const {user} = useContext(UserContext);
        return(
            <div className="card">
                <img src={IMG_CDN + cloudinaryImageId}/>
                <h2>{name}</h2>
                <h3>{cuisines?.join(", ")}</h3>
                <h3>Avg Rating {avgRating}</h3>
                <h4>{user.name} - {user.email}</h4>
            </div>
        );
    }

export default RestaurantCard;