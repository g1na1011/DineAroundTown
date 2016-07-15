import React, {Component} from 'react';

export default class LocationInput extends Component {
  constructor(props) {
    super(props);

    this.state = {location: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({location: event.target.value});
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="input-group">
            <input 
              type="text" 
              className="form-control"
              value={this.state.location} 
              onChange={this.onInputChange}
              placeholder="Enter your location" />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Submit!</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}