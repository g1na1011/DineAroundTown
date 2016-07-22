import React, {Component} from 'react';
import RestaurantList from '../containers/restaurant_list'; 
import RestaurantDetail from '../containers/restaurant_detail';
import LocationInput from '../containers/location_input';
import FoodTypeList from '../containers/food_type_list';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );  
  }
}