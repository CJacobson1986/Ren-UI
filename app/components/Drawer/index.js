/**
*
* Drawer
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Drawer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    let classType = "renuiDrawerLeft";
    if(this.props.left) {
      classType = "renuiDrawerLeft";
    }
    else if(this.props.top) {
      classType = "renuiDrawerTop";
    }
    else if(this.props.right) {
      classType = "renuiDrawerRight";
    }
    else if(this.props.bottom)
    {
      classType = "renuiDrawerBottom";
    }

    if(this.props.open === true)
    {
      return (
        <div className="renuiDrawerContainer" style={this.props.overStyle}>
          <div className="renuiDrawerOverlay" onClick={this.props.onClose}></div>
          <div className={classType} style={this.props.style}>
            {this.props.children}
          </div>
        </div>
      );
    }
    else if(this.props.docked) {
      return (
        <div className={classType} style={this.props.style} style={this.props.overStyle}>
          {this.props.children}
        </div>
      );
    }
    else {
      return (
        <div className="renuiDrawerOverlayHidden"></div>
      );
    }
  }
}

Drawer.contextTypes = {
  router: React.PropTypes.object
};
