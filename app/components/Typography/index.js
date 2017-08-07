/**
*
* Typography
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

class H1 extends React.PureComponent {
  render() {
    return (
      <h1 className="renuiTypographyContent" style={this.props.style}>{this.props.children}</h1>
    );
  }
}

class H2 extends React.PureComponent {
  render() {
    return (
      <h2 className="renuiTypographyContent" style={this.props.style}>{this.props.children}</h2>
    );
  }
}

class H3 extends React.PureComponent {
  render() {
    return (
      <h3 className="renuiTypographyContent" style={this.props.style}>{this.props.children}</h3>
    );
  }
}

class H4 extends React.PureComponent {
  render() {
    return (
      <h4 className="renuiTypographyContent" style={this.props.style}>{this.props.children}</h4>
    );
  }
}

class H5 extends React.PureComponent {
  render() {
    return (
      <h5 className="renuiTypographyContent" style={this.props.style}>{this.props.children}</h5>
    );
  }
}

class H6 extends React.PureComponent {
  render() {
    return (
      <h6 className="renuiTypographyContent" style={this.props.style}>{this.props.children}</h6>
    );
  }
}

class Sub extends React.PureComponent {
  render() {
    return (
      <div className="renuiTypographySub" style={this.props.style}>{this.props.children}</div>
    );
  }
}

class Divider extends React.PureComponent {
  render() {
    return (
      <div className="renuiTypographyDivider" style={this.props.style}></div>
    );
  }
}

module.exports = {
    H1: H1,
    H2: H2,
    H3: H3,
    H4: H4,
    H5: H5,
    H6: H6,
    Sub: Sub,
    Divider: Divider
}
