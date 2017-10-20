import React from 'react';

export class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg id={"svg"} className={"D3Canvas"} >
            
        <text y="30" >
          {this.props.data}
        </text>
        <text y="90" >
          {this.props.config}
        </text>
      </svg> 
    )
  }
}