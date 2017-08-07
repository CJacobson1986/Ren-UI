/**
*
* Avatar
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Avatar extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    let classType = "renuiAvatarImgCircle";

    if(this.props.type == "circle")
    {
      classType = "renuiAvatarImgCircle";
    }
    else if(this.props.type == "square")
    {
      classType = "renuiAvatarImgSquare";
    }

    if(this.props.style)
    {
      var renuiAvatarStyle = this.props.style;
    }
    else {
      var renuiAvatarStyle = {};
    }

    if(this.props.size)
    {
      renuiAvatarStyle['height'] = this.props.size + 'px';
      renuiAvatarStyle['width'] = this.props.size + 'px';
    }

    return (
      <div className="renuiAvatar" >
        <img src={this.props.src} className={classType} style={renuiAvatarStyle} />
      </div>
    );
  }
}

Avatar.contextTypes = {
  router: React.PropTypes.object
};
