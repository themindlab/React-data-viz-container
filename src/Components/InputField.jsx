import React from 'react';

export class InputField extends React.Component {
  
  constructor(props) {
    super(props);
    this.state =  {value : props.value}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange} rows={15}/> 
      </div>
    );
  }

}