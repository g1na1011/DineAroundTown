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
        <div key={type.type}>
          <button onClick={() => {this.selectFoodType(type.type)}}>
            {type.type}
          </button>
        </div>
      );
    });
  }



  render() {
    return (
      <div>
        <div>
          {this.renderList()}
          <button onClick={() => {this.changeLocation()}}>Change location</button>
        </div>
        <div id="wrapper">
              
          <div id="wheel">
              <div id="inner-wheel">
                  <div className="sec"><span className="fa fa-bell-o"></span></div>
                  <div className="sec"><span className="fa fa-comment-o"></span></div>
                  <div className="sec"><span className="fa fa-smile-o"></span></div>
                  <div className="sec"><span className="fa fa-heart-o"></span></div>
                  <div className="sec"><span className="fa fa-star-o"></span></div>
                  <div className="sec"><span className="fa fa-lightbulb-o"></span></div>
              </div>       
             
              <div id="spin">
                  <div id="inner-spin"></div>
              </div>
              
              <div id="shine"></div>
          </div>
          
          
          <div id="txt"></div>
        </div>
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