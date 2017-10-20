import React from 'react';

export class JsonField extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <textarea value={this.state.value} onChange={this.handleChange} />
    );
  }

}