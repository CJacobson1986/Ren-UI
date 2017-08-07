/**
*
* List
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

class List extends React.PureComponent {
  render() {
    return (
      <div className="renuiListContainer" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}


class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    if(this.props.left && !this.props.right)
    {
      return (
        <div className="renuiListItemContainerLeft" style={this.props.style}>
          <div className="renuiListItemLeft">{this.props.left}</div>
          <div className="renuiListItemContent">
            <div className="renuiListItemContentHeader">{this.props.content}</div>
            <div className="renuiListItemContentSub">{this.props.subContent}</div>
          </div>
          <div className="renuiListItemRight"></div>
        </div>
      );
    }
    else if(!this.props.left && this.props.right)
    {
      return (
        <div className="renuiListItemContainerRight" style={this.props.style}>
          <div className="renuiListItemContent">
            <div className="renuiListItemContentHeader">{this.props.content}</div>
            <div className="renuiListItemContentSub">{this.props.subContent}</div>
          </div>
          <div className="renuiListItemRight">{this.props.right}</div>
        </div>
      );
    }
    else if(this.props.left && this.props.right)
    {
      return (
        <div className="renuiListItemContainer" style={this.props.style}>
          <div className="renuiListItemLeft">{this.props.left}</div>
          <div className="renuiListItemContent">
            <div className="renuiListItemContentHeader">{this.props.content}</div>
            <div className="renuiListItemContentSub">{this.props.subContent}</div>
          </div>
          <div className="renuiListItemRight">{this.props.right}</div>
        </div>
      );
    }
    else if(!this.props.left && !this.props.right)
    {
      return (
        <div className="renuiListItemContainer" style={this.props.style}>
          <div className="renuiListItemContent">
            <div className="renuiListItemContentHeader">{this.props.content}</div>
            <div className="renuiListItemContentSub">{this.props.subContent}</div>
          </div>
        </div>
      );
    }
  }
}


module.exports = {
    List: List,
    ListItem: ListItem
}

List.contextTypes = {
  router: React.PropTypes.object
};
