import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {foodTypeSelected} from '../actions/index';

class FoodTypeList extends Component {
  constructor(props) {
    super(props);

    this.selectFoodType = this.selectFoodType.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  }

  changeLocation() {
    browserHistory.push('/');
  }

  selectFoodType(type, location) {
    return new Promise((resolve, reject) => {
      this.props.foodTypeSelected(type, this.props.activeLocation);
      resolve();
    })
    .then(() => {
      browserHistory.push('/restaurants');
    });
  }

  renderList() {
    return this.props.foodTypes.map((type) => {
      return (
        <div id="singleFoodType" key={type.type}>
          <button type="button" className="btn btn-primary" onClick={() => {this.selectFoodType(type.type)}}>
            {type.type}
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div id="foodType">
        <h2 id="foodTypeHeader">Select a Food Type:</h2>
        {this.renderList()}
        <button onClick={() => {this.changeLocation()}}>Change Location</button><br/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foodTypes: state.foodTypes,
    activeLocation: state.activeLocation
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({foodTypeSelected: foodTypeSelected}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodTypeList);