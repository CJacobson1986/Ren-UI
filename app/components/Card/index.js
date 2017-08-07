/**
*
* Card
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Card extends React.PureComponent {
  constructor(props) {
    super(props);
  }


  render() {

    let cardHeader = <div className="renuiCardHeader" style={this.props.headerStyle}> {this.props.header}</div>;
    if(!this.props.header)
    {
      cardHeader = null;
    }

    let cardContent = <div className="renuiCardContent" style={this.props.contentStyle}>{this.props.children}</div>;
    if(!this.props.children)
    {
      cardContent = null;
    }

    return (
      <div className="renuiCardContainer" style={this.props.style} id={this.props.id}>
        {cardHeader}
        <img className="renuiCardImage" style={this.props.imageStyle} src={this.props.image}/>
        {cardContent}
      </div>
    );
  }
}

Card.contextTypes = {
  router: React.PropTypes.object
};
