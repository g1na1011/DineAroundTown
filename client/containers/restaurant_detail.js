import React, {Component} from 'react';
import {connect} from 'react-redux';

class RestaurantDetail extends Component {
  render() {
    if (!this.props.restaurant) {
      return <div>Select a restaurant to get started.</div>
    } 
    return (
      <div>
        <h3>{this.props.restaurant.data.result.name}</h3>
        {this.props.restaurant.data.result.formatted_address}<br/>
        {this.props.restaurant.data.result.formatted_phone_number}<br/><br/>
        <a id="goToMaps" href={this.props.restaurant.data.result.url} target="_blank">
          <button type="button" className="btn btn-primary btn-sm">Take me there!</button>
        </a>
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
