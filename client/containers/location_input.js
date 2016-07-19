import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {selectLocation} from '../actions/index';

class LocationInput extends Component {
  constructor(props) {
    super(props);

    this.state = {location: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({location: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.selectLocation({location: this.state.location});
    this.setState({location: ''});
    browserHistory.push('/type');
  }

  render() {
    return (
      <div id="cityInput" className="row">
        <div className="col-lg-6">
          <h1 id="mainHeader">Please tell us your city...</h1>
          <form id="cityInputForm" className="input-group" onSubmit={this.onFormSubmit}>
            <input 
              type="text" 
              className="form-control"
              value={this.state.location} 
              onChange={this.onInputChange}
              placeholder="Enter your location" />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="submit">Submit</button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectLocation}, dispatch);
}

export default connect(null, mapDispatchToProps)(LocationInput);