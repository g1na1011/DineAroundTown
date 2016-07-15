import React, {Component} from 'react';
import RestaurantList from '../containers/restaurant_list'; 
import RestaurantDetail from '../containers/restaurant_detail';
import LocationInput from '../containers/location_input';

export default class App extends Component {
  render() {
    return (
      <div>
        <LocationInput />
        <RestaurantList />
        <RestaurantDetail />
      </div>
    );  
  }
}