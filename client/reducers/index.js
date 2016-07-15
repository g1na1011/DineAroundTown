import {combineReducers} from 'redux';
import RestaurantsReducer from './reducer_restaurants';
import ActiveRestaurantReducer from './reducer_active_restaurant';
import FoodTypesReducer from './reducer_food_types';

const rootReducer = combineReducers({
  restaurants: RestaurantsReducer,
  activeRestaurant: ActiveRestaurantReducer,
  foodTypes: FoodTypesReducer
});

export default rootReducer;