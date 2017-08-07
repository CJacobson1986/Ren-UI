/**
*
* Carousel
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

import LeftIcon from 'react-icons/lib/fa/chevron-left';
import RightIcon from 'react-icons/lib/fa/chevron-right';

class Carousel extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex:0
    }
  }

  componentDidMount() {
    if(this.props.auto) {
      if(this.props.auto <= 100)
      {
        this.props.auto = 5000
      }
      this.autoSlide(this.props.auto);
    }
  }

  autoSlide = () => {
    var _this = this;
    setInterval(function() {
      _this.nextSlide();
    }, this.props.auto);
  }

  nextSlide = () => {
    var slides = this.props.children;
    var activeIndex = this.state.activeIndex;

    if(activeIndex + 1 < slides.length)
    {
      this.setState({
        activeIndex: activeIndex + 1,
      })
    }
    else
    {
      this.setState({
        activeIndex: 0,
      })
    }
  }

  previousSlide = () => {
    var slides = this.props.children;
    var activeIndex = this.state.activeIndex;

    if(activeIndex - 1 >= 0)
    {
      this.setState({
        activeIndex: activeIndex - 1,
      })
    }
    else
    {
      this.setState({
        activeIndex: slides.length - 1,
      })
    }
  }

  renderSlide = () => {
    var slides = this.props.children;
    var activeIndex = this.state.activeIndex;
    for(var i = 0; i < slides.length; i++)
    {
      if(i === activeIndex)
      {
        return slides[i];
      }
    }
  }

  renderDots = (index) => {
    var slides = this.props.children;
    var activeIndex = this.state.activeIndex;

    for(var i = 0; i < slides.length; i++)
    {
      if(index === activeIndex)
      {
        return (<div onClick={() => this.changeSlide(index)} className="renuidotsActive"></div>);
      }
      else
      {
        return (<div onClick={() => this.changeSlide(index)} className="renuidots"></div>);
      }
    }
  }

  changeSlide = (index) => {
    this.setState({
      activeIndex:index
    })
  }

  render() {

    let leftIcon = null;
    let rightIcon = null;
    let classType = "renuiCarouselContainer";

    if(this.props.showIcons)
    {
      leftIcon = <LeftIcon className="renuiSliderIcon" style={this.props.iconStyle} onClick={this.previousSlide}/>;
      rightIcon = <RightIcon className="renuiSliderIcon" style={this.props.iconStyle} onClick={this.nextSlide}/>;
      classType = "renuiCarouselContainerButtons";
    }

    return (
      <div className={classType} style={this.props.style}>
        {this.renderSlide()}
        {leftIcon}
        {rightIcon}
        <div className="renuidotsContainer">
          {this.props.children.map((child, index) => (
            this.renderDots(index)
          ))}
        </div>
      </div>
    );
  }
}

class Slide extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <img className="renuiSlideImage" src={this.props.image}/>
    )
  }
}

module.exports = {
    Carousel: Carousel,
    Slide: Slide
}


Carousel.contextTypes = {
  router: React.PropTypes.object
};
