/**
*
* Snackbar
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Snackbar extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var _this = this;
    setTimeout(function(){ _this.props.onClose}, 1000);
  }

  render() {
    let renuiSnackbarPosition = {
      position:"fixed",
      bottom:"10px",
      left:"0",
      right:"0",
      zIndex:'999'
    }

    if(this.props.open === true)
    {
      return (
        <div style={renuiSnackbarPosition}>
          <div className="renuiSnackbarContainer" style={this.props.style}>
            <div className="renuiSnackbarContent">{this.props.content}</div>
            {this.props.button}
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="renuiSnackbarHidden"></div>
      );
    }
  }
}

Snackbar.contextTypes = {
  router: React.PropTypes.object
};
