/**
*
* Chip
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Chip extends React.PureComponent {
  render() {

    let image = <img className="renuiChipImage" src={this.props.image}/>;
    if(!this.props.image) {
      image = null;
    }

    let icon = <div className="renuiChipIcon">{this.props.icon}</div>;
    if(!this.props.icon) {
      icon = null;
    }

    return (
      <div className="renuiChipContainer" style={this.props.style}>
        {image}
        <div className="renuiChipContent">{this.props.content}</div>
        {icon}
      </div>
    );
  }
}

Chip.contextTypes = {
  router: React.PropTypes.object
};
