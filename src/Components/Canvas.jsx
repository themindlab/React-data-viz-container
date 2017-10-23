import React from 'react';
import * as d3 from 'd3';

console.log(d3)

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