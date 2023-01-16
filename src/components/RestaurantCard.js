import {IMG_CDN} from '../constants'
import { RESTAURANT_API } from '../constants';

    const RestaurantCard = ({restaurant}) => {
        const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.data;
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