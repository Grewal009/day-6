import {IMG_CDN} from '../constants'
import { RESTAURANT_API } from '../constants';

    const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
       
        return(
            <div className="card">
                <img src={IMG_CDN + cloudinaryImageId}/>
                <h2>{name}</h2>
                <h3>{cuisines?.join(", ")}</h3>
                <h3>Avg Rating {avgRating}</h3>
            </div>
        );
    }

export default RestaurantCard;