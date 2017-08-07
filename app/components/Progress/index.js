/**
*
* Progress
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Progress extends React.PureComponent {
  render() {
    return (
      <div className="renuiProgressContainer" style={this.props.style}>
        <div className="renuiProgressCircleOne"></div>
        <div className="renuiProgressCircleTwo"></div>
        <div className="renuiProgressCircleThree"></div>
      </div>
    );
  }
}

Progress.contextTypes = {
  router: React.PropTypes.object
};
