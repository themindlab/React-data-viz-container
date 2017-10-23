import React from 'react';

export class JsonField extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div>
        <button>Show Data</button><br/>
        <textarea value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }

}