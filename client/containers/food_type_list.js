import React, {Component} from 'react';
import {connect} from 'react-redux';

class FoodTypeList extends Component {
  renderList() {
    return this.props.foodTypes.map((type) => {
      return (
        <div key={type.type}>
          <button>
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
    foodTypes: state.foodTypes
  }
}

export default connect(mapStateToProps)(FoodTypeList);