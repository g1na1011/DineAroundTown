import React, {Component} from 'react';
import {connect} from 'react-redux';
import {foodTypeSelected} from '../actions/index';
import {bindActionCreators} from 'redux';

class FoodTypeList extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);

    // this.game;
    // this.wheel;
    // this.canSpin;
    // this.slices = 10;
    // this.foodTypes = ['Chinese', 'American', 'Japanese', 'Indian', 'Italian', 'French', 'Mediterranean','Mexican', 'Vietnamese'];
    // this.selectedFoodType;
    // this.selectedFoodTypeText;
  }

  onButtonClick(type, location) {
    this.props.foodTypeSelected(type, this.props.activeLocation);
  }

  renderList() {
    return this.props.foodTypes.map((type) => {
      return (
        <div key={type.type}>
          <button onClick={() => {this.onButtonClick(type.type)}}>
            {type.type}
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
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