import {combineReducers} from 'redux';
import RestaurantsReducer from './reducer_restaurants';
import ActiveRestaurantReducer from './reducer_active_restaurant';
import ActiveLocationReducer from './reducer_active_location';
import FoodTypesReducer from './reducer_food_types';

const rootReducer = combineReducers({
  restaurants: RestaurantsReducer,
  activeRestaurant: ActiveRestaurantReducer,
  activeLocation: ActiveLocationReducer,
  foodTypes: FoodTypesReducer
});

export default rootReducer;