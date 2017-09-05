/**
*
* Appbar
*
*/

import React from 'react';

import Bars from 'react-icons/lib/fa/bars';

import './style.css';
import './styleM.css';

export default class Appbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false
    }
  }

  handleMenu = () => {
    if(this.state.menuOpen === true)
    {
      this.setState({
        menuOpen:false
      })
    }
    else if(this.state.menuOpen === false)
    {
      this.setState({
        menuOpen:true
      })
    }
  }

  renderMenu() {
    if(this.state.menuOpen === true) {
      return(
        <nav className="renuiNavMobile">
          {this.props.children}
        </nav>
      )
    }
  }

  render() {

    let classType = "renuiAppbar";
    if(this.props.primary)
    {
      classType = classType + " renuiAppbarPrimary";
    }
    else if(this.props.secondary)
    {
      classType = classType + " renuiAppbarSecondary";
    }
    else if(this.props.third)
    {
      classType = classType + " renuiAppbarThird";
    }

    if(this.props.fixed)
    {
      classType = classType + " renuiAppbarFixed";
    }

    return (
      <div>
        <div className={classType} style={this.props.style}>
          <div className="renuiAppbarLogo">{this.props.title}</div>
          <nav className="renuiAppbarNav">
            {this.props.children}
          </nav>

          <Bars className="renuiMenuIcon" style={{color:'#FFFFFF'}} onClick={this.handleMenu}/>
        </div>
         {this.renderMenu()}
      </div>
    );
  }
}

Appbar.contextTypes = {
  router: React.PropTypes.object
};
