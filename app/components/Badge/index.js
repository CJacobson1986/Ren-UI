/**
*
* Badge
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Badge extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    let classType = "renuiBadge";
    if(this.props.primary)
    {
      classType = "renuiBadgePrimary";
    }
    else if(this.props.secondary)
    {
      classType = "renuiBadgeSecondary";
    }
    else if(this.props.third)
    {
      classType = "renuiBadgeThird";
    }

    return (
      <div className="renuiBadgeContainer">
        <span className="renuiBadgeContent">{this.props.children}</span>
        <div className={classType}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

Badge.contextTypes = {
  router: React.PropTypes.object
};
