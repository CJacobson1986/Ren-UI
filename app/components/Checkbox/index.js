/**
*
* Checkbox
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Checkbox extends React.PureComponent {
  render() {

    let classType = "renuiCheckboxInput";
    if(this.props.circle)
    {
      classType = "renuiCheckboxInput renuiCheckboxInputCircle";
    }

    return (
      <div className="renuiCheckboxInputContainer">
        <div className={classType}>
          <input type="checkbox" value={this.props.value} onChange={this.props.onChange}/>
          <label></label>
        </div>
        <label >{this.props.label}</label>
      </div>
    );
  }
}

Checkbox.contextTypes = {
  router: React.PropTypes.object
};
