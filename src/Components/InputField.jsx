import React from 'react';

export class InputField extends React.Component {
  
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <textarea value={this.props.value} onChange={this.handleChange} rows={20}/>
    );
  }

}