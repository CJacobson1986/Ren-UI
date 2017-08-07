/**
*
* Tabs
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  renderTab = (child, index) => {
    if(index === this.state.activeTab)
    {
      return(
        <div key={index}>{child.props.children}</div>
      );
    }
  }

  changeTab = (index) => {
    this.setState({
      activeTab:index
    })
  }

  renderActive = (child, index) => {
    let activeType = "renuiTabsTab";
    let tabsTabStyle = {};
    if(child.props.style)
    {
      tabsTabStyle = child.props.style;
    }
    if(index === this.state.activeTab) {
      tabsTabStyle['color'] = child.props.active;
      tabsTabStyle['borderBottom'] = '3px solid ' + child.props.active;
      activeType = "renuiTabsTab renuiTabsTabActive";
    }

    return(
      <div className={activeType} style={tabsTabStyle} key={index} onClick={() => this.changeTab(index)}>{child}</div>
    )
  }

  render() {

    let renuiTabStyle = {};
    if(this.props.style)
    {
      renuiTabStyle = this.props.style;
    }

    if(this.props.footer) {
      renuiTabStyle['position'] = 'fixed';
      renuiTabStyle['bottom'] = '0';
      renuiTabStyle['left'] = '0';
      renuiTabStyle['right'] = '0';

      return (
        <div className="renuiTabsContainer">
          <div className="renuiTabsContent">
            {this.props.children.map((child, index) => (
              this.renderTab(child, index)
            ))}
          </div>
          <div className="renuiTabsRow" style={renuiTabStyle}>
            {this.props.children.map((child, index) => (
              this.renderActive(child, index)
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="renuiTabsContainer">
          <div className="renuiTabsRow" style={renuiTabStyle}>
            {this.props.children.map((child, index) => (
              this.renderActive(child, index)
            ))}
          </div>
          <div className="renuiTabsContent">
            {this.props.children.map((child, index) => (
              this.renderTab(child, index)
            ))}
          </div>
        </div>
      );
    }
  }
}

class Tab extends React.PureComponent {
  render() {

    let icon = <div className="renuiTabsIcon" style={this.props.iconStyle}>{this.props.icon}</div>;
    let label = <div style={this.props.labelStyle}>{this.props.label}</div>;
    if(!this.props.icon) {
      icon = "";
    }
    if(!this.props.label)
    {
      label="";
    }

    let activeType = "renuiTabsTab";
    let tabsTabStyle = {};
    if(this.props.style)
    {
      tabsTabStyle = this.props.style;
    }

    return (
      <div className="renuiTabsTab">
        {icon}
        {label}
      </div>
    );
  }
}

module.exports = {
    Tabs: Tabs,
    Tab: Tab
}


Tabs.contextTypes = {
  router: React.PropTypes.object
};
