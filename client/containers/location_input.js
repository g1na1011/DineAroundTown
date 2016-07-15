import React, {Component} from 'react';

export default class LocationInput extends Component {
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
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <form className="input-group" onSubmit={this.onFormSubmit}>
            <input 
              type="text" 
              className="form-control"
              value={this.state.location} 
              onChange={this.onInputChange}
              placeholder="Enter your location" />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="submit">Submit!</button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}