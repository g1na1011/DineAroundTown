import {combineReducers} from 'redux';
import RestaurantsReducer from './reducer_restaurants';
import ActiveRestaurant from './reducer_active_restaurant';

const rootReducer = combineReducers({
  restaurants: RestaurantsReducer,
  activeRestaurant: ActiveRestaurant
});

export default rootReducer;