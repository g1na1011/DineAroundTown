import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {restaurantSelected, resetLocation, resetRestaurants, resetActiveRestaurant} from '../actions/index';
import RestaurantDetail from './restaurant_detail';

class RestaurantList extends Component {
  constructor(props) {
    super(props);

    this.goHome = this.goHome.bind(this);
    this.showRestDetail = this.showRestDetail.bind(this);
  }

  goHome() {
    browserHistory.push('/');
    this.props.resetLocation();
    this.props.resetRestaurants();
    this.props.resetActiveRestaurant();
  }

  showRestDetail(placeId) {
    this.props.restaurantSelected(placeId);
  }

  renderList() {
    return this.props.restaurants.data.results.map((restaurant) => {
      return (
        <li 
          key={restaurant.name} 
          className="list-group-item"
          onClick={() => {this.showRestDetail(restaurant.place_id)}}>{restaurant.name}
        </li>
      );
    });
  }

  render() {
    if (this.props.restaurants.length !== 0) {
      return (
        <div>
          <div>
            <ul className="list-group col-sm-4">
              {this.renderList()}
            </ul>
            <button onClick={() => {this.goHome()}} type="button" className="btn btn-secondary">Restart</button>
          </div>
          <div>
            <RestaurantDetail />
          </div>
        </div>
      );
    }
    return (
      <div>Loading...</div>
    );
  }
};

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    restaurantSelected: restaurantSelected,
    resetLocation: resetLocation,
    resetRestaurants: resetRestaurants,
    resetActiveRestaurant: resetActiveRestaurant
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
