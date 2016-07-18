import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectRestaurant} from '../actions/index';
import {bindActionCreators} from 'redux';

class RestaurantList extends Component {
  renderList() {
    return this.props.restaurants.data.results.map((restaurant) => {
      return (
        <li 
          key={restaurant.name} 
          className="list-group-item">{restaurant.name}
        </li>
      );
    });
  }

  render() {
    if (this.props.restaurants.length !== 0) {
      return (
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
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
  return bindActionCreators({selectRestaurant: selectRestaurant}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
