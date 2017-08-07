/**
*
* Slider
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Slider extends React.PureComponent {
  render() {
    return (
      <div>
        <input className="renuiSliderInput" type="range" min={this.props.min} max={this.props.max} step={this.props.step}/>
      </div>
    );
  }
}

Slider.contextTypes = {
  router: React.PropTypes.object
};
