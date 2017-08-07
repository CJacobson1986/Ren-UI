/**
*
* Button
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Button extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    let classType = "renuiButton";
    if(this.props.primary)
    {
      classType = "renuiButtonPrimary";
    }
    else if(this.props.secondary)
    {
      classType = "renuiButtonSecondary";
    }
    else if(this.props.third)
    {
      classType = "renuiButtonThird";
    }

    return (
      <div className={classType} style={this.props.style} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

Button.contextTypes = {
  router: React.PropTypes.object
};
