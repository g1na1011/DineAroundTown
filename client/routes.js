import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import LocationInput from './containers/location_input';
import FoodType from './containers/food_type_list';
import RestaurantList from './containers/restaurant_list';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LocationInput} />
    <Route path="type" component={FoodType} />
    <Route path="restaurants" component={RestaurantList} />
  </Route>
);