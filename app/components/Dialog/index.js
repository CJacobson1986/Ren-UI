/**
*
* Dialog
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Dialog extends React.PureComponent {
  render() {
    if(this.props.open === true)
    {
      return (
        <div>
          <div className="fullOverlay" onClick={this.props.onClose}>
          </div>
          <div className="renuiDialogOverlay">
            <div className="renuiDialog">
              {this.props.children}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="renuiDialogOverlayHidden"></div>
      );
    }
  }
}

Dialog.contextTypes = {
  router: React.PropTypes.object
};
