import {IMG_CDN} from '../constants'
import { RESTAURANT_API } from '../constants';

    const RestaurantCard = (props) => {
        return(
            <div className="card">
                <img src={IMG_CDN + props.restaurant?.data?.cloudinaryImageId}/>
                <h2>{props.restaurant?.data?.name}</h2>
                <h3>{props.restaurant?.data?.cuisines?.join(", ")}</h3>
                <h3>Avg Rating {props.restaurant?.data?.avgRating}</h3>
            </div>
        );
    }

export default RestaurantCard;