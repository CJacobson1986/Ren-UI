/**
*
* Appbar
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Appbar extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    let classType = "renuiAppbar";
    if(this.props.primary)
    {
      classType = classType + " renuiAppbarPrimary";
    }
    else if(this.props.secondary)
    {
      classType = classType + " renuiAppbarSecondary";
    }
    else if(this.props.third)
    {
      classType = classType + " renuiAppbarThird";
    }

    if(this.props.fixed)
    {
      classType = classType + " renuiAppbarFixed";
    }

    return (
      <div className={classType} style={this.props.style}>
        <div className="renuiAppbarLogo">{this.props.title}</div>
        <nav className="renuiAppbarNav">
          {this.props.children}
        </nav>
      </div>
    );
  }
}

Appbar.contextTypes = {
  router: React.PropTypes.object
};
