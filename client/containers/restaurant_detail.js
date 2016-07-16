import React, {Component} from 'react';
import {connect} from 'react-redux';

class RestaurantDetail extends Component {
  render() {
    if (!this.props.restaurant) {
      return <div>Select a restaurant to get started.</div>
    } 
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.restaurant.name}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurant: state.activeRestaurant
  }
}

export default connect(mapStateToProps)(RestaurantDetail);
