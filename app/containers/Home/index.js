/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import Appbar from 'components/Appbar';
import Button from 'components/Button';
import Avatar from 'components/Avatar';
import Badge from 'components/Badge';
import Card from 'components/Card';
import Chip from 'components/Chip';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import {List, ListItem} from 'components/List';
import Progress from 'components/Progress';
import Snackbar from 'components/Snackbar';
import {Tab, Tabs} from 'components/Tabs';
import Dialog from 'components/Dialog';
import Drawer from 'components/Drawer';
import {Carousel, Slide} from 'components/Carousel';
import {H1, H2, H3, H4, H5, H6, Sub, Divider} from 'components/Typography';
import Slider from 'components/Slider';
import {Row, Column} from 'components/Grid';

import FaBeer from 'react-icons/lib/fa/beer';
import FaClose from 'react-icons/lib/fa/close';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openSnack:false,
      openDialog:false,
      openDrawer:false,
      openTopDrawer:false,
      openRightDrawer:false,
      openBottomDrawer:false
    }
  }

  handleSheet = () => {
    this.setState({
      openSheet:!this.state.openSheet
    })
  }

  handleSnack = () => {
    this.setState({
      openSnack:!this.state.openSnack
    })
  }

  handleDialog = () => {
    this.setState({
      openDialog:!this.state.openDialog
    })
  }

  handleDrawer = () => {
    this.setState({
      openDrawer:!this.state.openDrawer
    })
  }

  handleTopDrawer = () => {
    this.setState({
      openTopDrawer:!this.state.openTopDrawer
    })
  }


  handleRightDrawer = () => {
    this.setState({
      openRightDrawer:!this.state.openRightDrawer
    })
  }


  handleBottomDrawer = () => {
    this.setState({
      openBottomDrawer:!this.state.openBottomDrawer
    })
  }

  render() {
    return (
      <div className="container">
        <Helmet title="Ren-UI" meta={[ { name: 'description', content: 'React Web Components that Implement Material Design.' }]}/>

        <Drawer docked overStyle={{zIndex:'95'}}>
          <a href="#intro"><ListItem content="Introduction"/></a>
          <a href="#appbar"><ListItem content="Appbar"/></a>
          <a href="#avatar"><ListItem content="Avatar"/></a>
          <a href="#badge"><ListItem content="Badge"/></a>
          <a href="#button"><ListItem content="Button"/></a>
          <a href="#card"><ListItem content="Card"/></a>
          <a href="#carousel"><ListItem content="Carousel"/></a>
          <a href="#checkbox"><ListItem content="Checkbox"/></a>
          <a href="#chip"><ListItem content="Chip"/></a>
          <a href="#dialog"><ListItem content="Dialog"/></a>
          <a href="#drawer"><ListItem content="Drawer"/></a>
          <a href="#grid"><ListItem content="Grid"/></a>
          <a href="#input"><ListItem content="Input"/></a>
          <a href="#list"><ListItem content="List"/></a>
          <a href="#progress"><ListItem content="Progress"/></a>
          <a href="#slider"><ListItem content="Slider"/></a>
          <a href="#snackbar"><ListItem content="Snackbar"/></a>
          <a href="#tabs"><ListItem content="Tabs"/></a>
          <a href="#typography"><ListItem content="Typography"/></a>
        </Drawer>


        <main className="mainContainer" id="intro">

          <Appbar title="Ren-UI" primary>
            <a href="https://github.com/Technopathic/Ren-UI">
              <Button style={{color:'#FFFFFF'}}>
                v0.1.5 Github
              </Button>
            </a>
          </Appbar>
          <div className="introContainer" >
            <header className="mainHeader">
              <H1 style={{fontSize:'5em', color:"#FFFFFF"}}>Ren-UI</H1>
              <H4 style={{color:"#FFFFFF"}}>A set of ReactJS Web Components for User Interfaces and Experience.</H4>
            </header>
          </div>

          <div className="showcaseMain">

            <Card header="Appbar" id="appbar">

              <div style={{margin:'15px'}}>The Appbar is a toolbar used for branding, navigation, search, and other actions.</div>

              <Appbar title="Primary Bar" style={{margin:"30px", boxShadow:"0px 0px 15px 0px rgba(0, 0, 0, 0.3)"}} primary>
                <Button>
                  v0.1.5 Github
                </Button>
              </Appbar>

              <Appbar title="Secondary Bar" style={{margin:"30px", boxShadow:"0px 0px 15px 0px rgba(0, 0, 0, 0.3)"}} secondary>
                <Button>
                  v0.1.5 Github
                </Button>
              </Appbar>

              <Appbar title="Third Bar" style={{margin:"30px", boxShadow:"0px 0px 15px 0px rgba(0, 0, 0, 0.3)"}} third>
                <Button>
                  v0.1.5 Github
                </Button>
              </Appbar>
              <div className="codeContainer">
<pre>{`import Appbar from 'components/Appbar';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Appbar title="Primary Bar" style={{margin:"30px", boxShadow:"0px 0px 15px 0px rgba(0, 0, 0, 0.3)"}} primary>
  <Button>
    v0.1.5 Github
  </Button>
</Appbar>

<Appbar title="Secondary Bar" style={{margin:"30px", boxShadow:"0px 0px 15px 0px rgba(0, 0, 0, 0.3)"}} secondary>
  <Button>
    v0.1.5 Github
  </Button>
</Appbar>

<Appbar title="Third Bar" style={{margin:"30px", boxShadow:"0px 0px 15px 0px rgba(0, 0, 0, 0.3)"}} third>
  <Button>
    v0.1.5 Github
  </Button>
</Appbar>
`}</pre>
              </div>
            </Card>

            <Card header="Avatar" id="avatar">
              <div style={{margin:'15px'}}>Avatars can be used to represent people or objects. Avatars can have custom sizes and shapes.</div>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <Avatar src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem" type="circle"  style={{margin:"30px", boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.3)"}}/>
                <span style={{fontSize:'1.1em'}}>Image Avatar</span>
              </div>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <Avatar src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem" type="square"  style={{margin:"30px", boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.3)"}}/>
                <span style={{fontSize:'1.1em'}}>Square Avatar</span>
              </div>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <Avatar src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem" size={30}  style={{margin:"30px", boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.3)"}}/>
                <span style={{fontSize:'1.1em'}}>Custom Size Avatar</span>
              </div>
              <div className="codeContainer">
<pre>{`import Avatar from 'components/Avatar';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
  <Avatar src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem" type="circle"  style={{margin:"30px", boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.3)"}}/>
  <span style={{fontSize:'1.1em'}}>Image Avatar</span>
</div>

<div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
  <Avatar src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem" type="square"  style={{margin:"30px", boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.3)"}}/>
  <span style={{fontSize:'1.1em'}}>Square Avatar</span>
</div>

<div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
  <Avatar src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem" size={30}  style={{margin:"30px", boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.3)"}}/>
  <span style={{fontSize:'1.1em'}}>Custom Size Avatar</span>
</div>
`}</pre>
</div>
            </Card>

            <Card header="Badge" id="badge">
              <div style={{margin:'15px'}}>This component generates a small badge to the top-right of its child.</div>
              <div className="showcaseBadge">
                <Badge content={4}><FaBeer/></Badge>
                <Badge content={324} primary><FaBeer/></Badge>
                <Badge content={52} secondary><FaBeer/></Badge>
                <Badge content={81} third><FaBeer/></Badge>
              </div>
              <div className="codeContainer">
<pre>{`import Badge from 'components/Badge';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Badge content={4}><FaBeer/></Badge>

<Badge content={324} primary><FaBeer/></Badge>

<Badge content={52} secondary><FaBeer/></Badge>

<Badge content={81} third><FaBeer/></Badge>
`}</pre>
</div>
            </Card>

            <Card header="Button" id="button">
              <div style={{margin:'15px'}}>Buttons are used to add interactive functionality to your page. They can hold text and icons.</div>
              <div className="showcaseButtons">
                <a href="#">
                  <Button>
                    Clear Button
                  </Button>
                </a>
                <a href="#">
                  <Button primary>
                    Primary Button
                  </Button>
                </a>
                <a href="#">
                  <Button secondary>
                    Secondary Button
                  </Button>
                </a>
                <a href="#">
                  <Button third>
                    Third Button
                  </Button>
                </a>
              </div>
              <div className="codeContainer">
<pre>{`import Badge from 'components/Badge';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Button>Clear Button</Button>

<Button primary>Primary Button</Button>

<Button secondary>Secondary Button</Button>

<Button third>Third Button</Button>
`}</pre>
</div>
            </Card>

            <Card header="Card" id="card">
              <div style={{margin:'15px'}}>Cards can be used as an entry point to more detailed information. They can hold a heading, image, and content. </div>
              <div className="showcaseCard">
                <Card image="http://media.gq.com/photos/59790e580358ef5b0148c6bc/3:2/w_800/lv-smart-watch-lede.jpg" header="First Example">
                  <H3>A Card with HTML Content</H3>
                </Card>
                <Card image="http://media.gq.com/photos/59790e580358ef5b0148c6bc/3:2/w_800/lv-smart-watch-lede.jpg" header="Second Example">
                  <H3>A Card with HTML Content</H3>
                </Card>
                <Card image="http://media.gq.com/photos/59790e580358ef5b0148c6bc/3:2/w_800/lv-smart-watch-lede.jpg" header="Third Example">
                  <H3>A Card with HTML Content</H3>
                </Card>
              </div>
              <div className="codeContainer">
<pre>{`import Card from 'components/Card';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Card image="http://media.gq.com/photos/59790e580358ef5b0148c6bc/3:2/w_800/lv-smart-watch-lede.jpg" header="First Example">
  <H3>A Card with HTML Content</H3>
</Card>
`}</pre>
</div>
            </Card>

            <Card header="Carousel" id="carousel">
              <div style={{margin:'15px'}}>This component can be used to automatically display a series of images. </div>
              <Carousel style={{height:"300px"}} auto={5000}>
                <Slide image="http://media.gq.com/photos/59839fb72a1a177941f604db/3:2/w_1200/2017-08_GQ_NETFLIX-90s-Movies_3x2.jpg"/>
                <Slide image="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-288912.jpg"/>
                <Slide image="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-7025.jpg"/>
              </Carousel>
              <div className="codeContainer">
<pre>{`import {Carousel, Slide} from 'components/Carousel';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Carousel style={{height:"300px"}} auto={5000}>

  <Slide image="http://media.gq.com/photos/59839fb72a1a177941f604db/3:2/w_1200/2017-08_GQ_NETFLIX-90s-Movies_3x2.jpg"/>
  <Slide image="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-288912.jpg"/>
  <Slide image="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-7025.jpg"/>

</Carousel>
`}</pre>
</div>
            </Card>

            <Card header="Checkbox" id="checkbox">
              <div style={{margin:'15px'}}>A checkbox is used to verify which options you want selected from a group.</div>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'15px'}}>
                <Checkbox/>
                <span style={{fontSize:'1.1em', marginLeft:'15px'}}>Square Checkbox</span>
              </div>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'15px'}}>
                <Checkbox circle/>
                <span style={{fontSize:'1.1em', marginLeft:'15px'}}>Circle Checkbox</span>
              </div>
              <div className="codeContainer">
<pre>{`import Checkbox from 'components/Checkbox';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Checkbox value={1} onChange={this.handleChange}/>

<Checkbox circle value={1} onChange={this.handleChange}/>
`}</pre>
</div>
            </Card>

            <Card header="Chip" id="chip">
              <div style={{margin:'15px'}}>Chips represetn complex entities within small boxes, such as a tag or contact.</div>
              <div className="showcaseChip">
                <Chip
                  content="Ren UI"
                />
                <Chip
                  image="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem"
                  content="Ren UI"
                />
                <Chip
                  image="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem"
                  content="Ren UI"
                  icon={<FaClose/>}
                />
              </div>
              <div className="codeContainer">
<pre>{`import Chip from 'components/Chip';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Chip content="Ren UI" />

<Chip image="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem" content="Ren UI" />

<Chip image="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem" content="Ren UI" icon={<FaClose/>} />
`}</pre>
</div>
            </Card>

            <Card header="Dialog" id="dialog">
              <div style={{margin:'15px'}}>Dialogs contain text and UI controls focused on a specific task. They inform users about critical information, rqeuire users to make decisions, or involve multiple tasks.</div>
              <div className="showcaseDialog">
                <Button primary onClick={this.handleDialog}>Open Dialog</Button>
                <Dialog open={this.state.openDialog} onClose={this.handleDialog}>Dialog Content</Dialog>
              </div>
              <div className="codeContainer">
<pre>{`import Dialog from 'components/Dialog';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`constructor(props) {
  super(props);
  this.state = {
    openDialog:false,
  }
}

handleDialog = () => {
  this.setState({
    openDialog:!this.state.openDialog
  })
}

render() {
  return(
    <div>
      <Button primary onClick={this.handleDialog}>Open Dialog</Button>
      <Dialog open={this.state.openDialog} onClose={this.handleDialog}>Dialog Content</Dialog>
    </div>
  );
}
`}</pre>
</div>
            </Card>

            <Card header="Drawer" id="drawer">
              <div style={{margin:'15px'}}>The Drawer appears from the side. Drawers can be positioned along side any edge of the screen and be docked, such as the one on this page.</div>
              <div className="showcaseDrawer">
                <Button primary onClick={this.handleDrawer}>Open Drawer</Button>
                <Drawer open={this.state.openDrawer} onClose={this.handleDrawer}></Drawer>

                <Button primary onClick={this.handleRightDrawer}>Open Right Drawer</Button>
                <Drawer open={this.state.openRightDrawer} onClose={this.handleRightDrawer} right></Drawer>

                <Button primary onClick={this.handleTopDrawer}>Open Top Drawer</Button>
                <Drawer open={this.state.openTopDrawer} onClose={this.handleTopDrawer} top></Drawer>

                <Button primary onClick={this.handleBottomDrawer}>Open Bottom Drawer</Button>
                <Drawer open={this.state.openBottomDrawer} onClose={this.handleBottomDrawer} bottom></Drawer>
              </div>
              <div className="codeContainer">
<pre>{`import Drawer from 'components/Drawer';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`constructor(props) {
  super(props);
  this.state = {
    openDrawer:false,
    openTopDrawer:false,
    openRightDrawer:false,
    openBottomDrawer:false
  }
}

handleDrawer = () => {
  this.setState({
    openDrawer:!this.state.openDrawer
  })
}

handleTopDrawer = () => {
  this.setState({
    openTopDrawer:!this.state.openTopDrawer
  })
}


handleRightDrawer = () => {
  this.setState({
    openRightDrawer:!this.state.openRightDrawer
  })
}


handleBottomDrawer = () => {
  this.setState({
    openBottomDrawer:!this.state.openBottomDrawer
  })
}

render() {
  return(
    <div>
      <Button primary onClick={this.handleDrawer}>Open Drawer</Button>
      <Drawer open={this.state.openDrawer} onClose={this.handleDrawer}></Drawer>

      <Button primary onClick={this.handleRightDrawer}>Open Right Drawer</Button>
      <Drawer open={this.state.openRightDrawer} onClose={this.handleRightDrawer} right></Drawer>

      <Button primary onClick={this.handleTopDrawer}>Open Top Drawer</Button>
      <Drawer open={this.state.openTopDrawer} onClose={this.handleTopDrawer} top></Drawer>

      <Button primary onClick={this.handleBottomDrawer}>Open Bottom Drawer</Button>
      <Drawer open={this.state.openBottomDrawer} onClose={this.handleBottomDrawer} bottom></Drawer>
    </div>
  );
}
`}</pre>
</div>
            </Card>

            <Card header="Grid" id="grid">
              <div style={{margin:'15px'}}>The Grid components are a method of simplifying Flexbox properties to create layouts.</div>
              <Row style={{background:'#6fe0e8'}}>
                <Column style={{background:'#ff2181', height:'200px', margin:'15px'}}></Column>
                <Column style={{background:'#ff2181', height:'200px', margin:'15px'}}></Column>
                <Column style={{background:'#ff2181', height:'200px', margin:'15px'}}></Column>
              </Row>
              <div className="codeContainer">
<pre>{`import {Row, Column} from 'components/Grid';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Row style={{background:'#6fe0e8'}}>
  <Column style={{background:'#ff2181', height:'200px', margin:'15px'}}></Column>
  <Column style={{background:'#ff2181', height:'200px', margin:'15px'}}></Column>
  <Column style={{background:'#ff2181', height:'200px', margin:'15px'}}></Column>
</Row>

`}</pre>
</div>
            </Card>

            <Card header="Input" id="input">
              <div style={{margin:'15px'}}>Input fields allow users to input text.</div>

              <div style={{marginTop:'15px'}}>
                <Input label="Username" placeholder="Floating Label Input"/>
              </div>

              <div style={{marginTop:'15px'}}>
                <Input warning placeholder="Warning Input"/>
              </div>

              <div style={{marginTop:'15px'}}>
                <Input danger error="Please fill out all fields." placeholder="Input with an Error"/>
              </div>

              <div style={{marginTop:'15px'}}>
                <Input success multi placeholder="Multi-line Input"/>
              </div>
              <div className="codeContainer">
<pre>{`import Input from 'components/Input';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Input label="Username" placeholder="Floating Label Input"/>

<Input warning placeholder="Warning Input"/>

<Input danger error="Please fill out all fields." placeholder="Input with an Error"/>

<Input success multi placeholder="Multi-line Input"/>

`}</pre>
</div>
            </Card>

            <Card header="List" id="list">
              <div style={{margin:'15px'}}>Lists are used to preset multiple items vertically as a single continuous element. They can be configured for many uses such as contact lists.</div>
              <div className="showcaseList">
                <List>
                  <ListItem content="List Item One" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem content="List Item Two" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem content="List Item Three" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem content="List Item Four" subContent="Hi, how are things down at the blahblahblah"/>
                </List>

                <List>
                  <ListItem left={<FaBeer/>} content="List Item One" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem left={<FaBeer/>} content="List Item Two" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem left={<FaBeer/>} content="List Item Three" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem left={<FaBeer/>} content="List Item Four" subContent="Hi, how are things down at the blahblahblah"/>
                </List>

                <List>
                  <ListItem left={<Avatar src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem" type="circle" />} content="List Item One" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem left={<Avatar src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadee" type="circle" />} content="List Item Two" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem left={<Avatar src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nade" type="circle" />} content="List Item Three" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem left={<Avatar src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nad" type="circle" />} content="List Item Four" subContent="Hi, how are things down at the blahblahblah"/>
                </List>

                <List>
                  <ListItem right={<FaBeer/>} content="List Item One" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem right={<FaBeer/>} content="List Item Two" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem right={<FaBeer/>} content="List Item Three" subContent="Hi, how are things down at the blahblahblah"/>
                  <ListItem right={<FaBeer/>} content="List Item Four" subContent="Hi, how are things down at the blahblahblah"/>
                </List>
              </div>
              <div className="codeContainer">
<pre>{`import {List, ListItem} from 'components/List';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<List>

  <ListItem content="List Item One" subContent="Hi, how are things down at the..."/>

  <ListItem left={<FaBeer/>} content="List Item Two" subContent="Hi, how are things down at the blahblahblah"/>

  <ListItem left={<Avatar src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nade" type="circle" />} content="List Item Three" subContent="Hi, how are things down at the blahblahblah"/>

  <ListItem right={<FaBeer/>} content="List Item Four" subContent="Hi, how are things down at the blahblahblah"/>

</List>
`}</pre>
</div>
            </Card>

            <Card header="Progress" id="progress">
              <div style={{margin:'15px'}}>Progress indicators will animate during the progress of a task until they are hidden.</div>
              <div className="showcaseProgress">
                <Progress />
              </div>
              <div className="codeContainer">
<pre>{`import Progress from 'components/Progress';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Progress />
`}</pre>
</div>
            </Card>

            <Card header="Slider" id="slider">
              <div style={{margin:'15px'}}>A slider is an interface for users to input a value in a range. </div>
              <Slider/>
              <div className="codeContainer">
<pre>{`import Slider from 'components/Slider';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Slider min={1} max={100} step={10} />
`}</pre>
</div>
            </Card>

            <Card header="Snackbar" id="snackbar">
              <div style={{margin:'15px'}}>Snackbars provide lightweight feedback about an operation by showing a brief message at the bottom of the screen.</div>
              <div className="showcaseSnackbar">
                <Button primary onClick={this.handleSnack}>Open Snackbar</Button>
                <Snackbar content="Snackbar Alert" open={this.state.openSnack} onClose={this.handleSnack} button={<Button style={{color:'#FFFFFF', border:'1px solid #999999'}}>Button</Button>}/>
              </div>
              <div className="codeContainer">
<pre>{`import Snackbar from 'components/Snackbar';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`constructor(props) {
  super(props);
  this.state = {
    openSnack:false,
  }
}

handleSnack = () => {
  this.setState({
    openSnack:!this.state.openSnack
  })
}

render() {
  return(
    <div>
      <Button primary onClick={this.handleSnack}>Open Snackbar</Button>
      <Snackbar content="Snackbar Alert" open={this.state.openSnack} onClose={this.handleSnack} button={<Button style={{color:'#FFFFFF', border:'1px solid #999999'}}>Button</Button>}/>
    </div>
  );
}
`}</pre>
</div>
            </Card>

            <Card header="Tabs" id="tabs">
              <div style={{margin:'15px'}}>Tabs make it easy to explore and switch between different views or functional aspects of an app.</div>
              <Tabs>
                <Tab label="Tab One" icon={<FaBeer/>} ><div style={{padding:'15px'}}>Tabs can hold any sort of HTML or Style and even include other components.</div></Tab>
                <Tab icon={<FaBeer/>}><div style={{padding:'15px'}}>Tabs can hold labels, icons, or both.</div></Tab>
                <Tab label="Tab Three" icon={<FaBeer/>} active="#FF0000"><div style={{padding:'15px'}}>The colors of the active tab can be changed.</div></Tab>
              </Tabs>
              <div className="codeContainer">
<pre>{`import {Tabs, Tab} from 'components/Tabs';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<Tabs>

  <Tab label="Tab One" icon={<FaBeer/>} >
    <div style={{padding:'15px'}}>Tabs can hold any sort of HTML or Style and even include other components.</div>
  </Tab>

  <Tab icon={<FaBeer/>}>
    <div style={{padding:'15px'}}>Tabs can hold labels, icons, or both.</div>
  </Tab>

  <Tab label="Tab Three" icon={<FaBeer/>} active="#FF0000">
    <div style={{padding:'15px'}}>The colors of the active tab can be changed.</div>
  </Tab>

</Tabs>
`}</pre>
</div>
            </Card>

            <Card header="Typography" id="typography">
              <div style={{margin:'15px'}}>Typographical elements are used to emphasize text. This component also includes a Divider for separating sections.</div>
              <div className="showcaseTypography">
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'15px'}}>
                  <H1>Heading 1</H1>
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'15px'}}>
                  <H2>Heading 2</H2>
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'15px'}}>
                  <H3>Heading 3</H3>
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'15px'}}>
                  <H4>Heading 4</H4>
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'15px'}}>
                  <H5>Heading 5</H5>
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'15px'}}>
                  <H6>Heading 6</H6>
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'15px'}}>
                  <Sub>Sub Heading</Sub>
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'15px'}}>
                  <span>Horizontal Divider</span>
                  <Divider/>
                </div>
              </div>
              <div className="codeContainer">
<pre>{`import {H1, H2, H3, H4, H5, H6, Sub, Divider} from 'components/Typography';`}</pre>
              </div>
              <div className="codeContainer">
<pre>{`<H1>Heading 1</H1>

<H2>Heading 2</H2>

<H3>Heading 3</H3>

<H4>Heading 4</H4>

<H5>Heading 5</H5>

<H6>Heading 6</H6>

<Sub>Sub Heading</Sub>

<Divider/>
`}</pre>
</div>
            </Card>
          </div>
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
