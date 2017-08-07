/**
*
* Grid
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

class Row extends React.PureComponent {
  render() {
    return (
      <div className="renuiGridRow" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

class Column extends React.PureComponent {
  render() {
    return (
      <div className="renuiGridColumn" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = {
    Row: Row,
    Column: Column
}
