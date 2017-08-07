/**
*
* Input
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Input extends React.PureComponent {

  render() {

    let inputType = "text";
    if(this.props.password) {
      inputType = "password"
    }

    let classType = "renuiInputField renuiInputFieldPrimary";
    if(this.props.primary)
    {
      classType = "renuiInputField renuiInputFieldPrimary";
    }
    else if(this.props.warning)
    {
      classType = "renuiInputField renuiInputFieldWarning";
    }
    else if(this.props.danger)
    {
      classType = "renuiInputField renuiInputFieldDanger";
    }
    else if(this.props.success)
    {
      classType = "renuiInputField renuiInputFieldSuccess";
    }
    if(!this.props.multi)
    {
      return (
        <div className="renuiInputContainer">
          <div className="renuiInputLabel">{this.props.label}</div>
          <input
            type={inputType}
            className={classType}
            style={this.props.style}
            placeholder={this.props.placeholder}
            value={this.props.value}
          />
          <div className="renuiInputErrorText" style={this.props.errorStyle}>{this.props.error}</div>
        </div>
      );
    }
    else if(this.props.multi)
    {
      if(this.props.multi < 1)
      {
        this.props.multi = 1;
      }
      return (
        <div className="renuiInputContainer">
          <div className="renuiInputLabel">{this.props.label}</div>
          <textarea
            type={inputType}
            className={classType}
            style={this.props.style}
            placeholder={this.props.placeholder}
            rows={this.props.multi}
          >{this.props.value}</textarea>
          <div className="renuiInputErrorText" style={this.props.errorStyle}>{this.props.error}</div>
        </div>
      );
    }
  }
}

Input.contextTypes = {
  router: React.PropTypes.object
};
