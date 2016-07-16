import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectRestaurant} from '../actions/index';
import {bindActionCreators} from 'redux';

class RestaurantList extends Component {
  renderList() {
    // return this.props.restaurants.map((restaurant) => {
    //   return (
    //     <li 
    //       key={restaurant.name} 
    //       className="list-group-item"
    //       onClick={() => this.props.selectRestaurant(restaurant)}>{restaurant.name}
    //     </li>
    //   );
    // });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
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
