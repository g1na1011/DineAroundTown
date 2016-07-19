import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {selectRestaurant} from '../actions/index';

class RestaurantList extends Component {
  constructor(props) {
    super(props);

    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    browserHistory.push('/');
  }

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
        <div>
          <ul className="list-group col-sm-4">
            {this.renderList()}
          </ul>
          <button onClick={() => {this.goHome()}}>Restart</button>
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
  return bindActionCreators({selectRestaurant: selectRestaurant}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
