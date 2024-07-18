import { useSearchRestaurans } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results } = useSearchRestaurans(city);
  

  return <span> 
    User searched for {city}</span>
    {results?.data.map((restaurant)=> <span>
      found - {restaurant.restaurantName},{restaurant.city}
    </span>)}
}

export default SearchPage;