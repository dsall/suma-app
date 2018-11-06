import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink, Container, Row } from 'mdbreact';

class SideNavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLeftOpen: false,
      isRightOpen: false
    };
  }

// Slide out buttons event handlers
  handleToggleClickA = () => {
    this.setState({
      isLeftOpen: !this.state.isLeftOpen
    })
  }
  handleToggleClickB = () => {
    this.setState({
      isRightOpen: !this.state.isRightOpen
    })
  }

  render() {
    // Because the toggling buttons are nearly identical, we create a function to render them:
    const createButton = (onClick, side) => {
      return <div style={{width: "50%", textAlign: "center"}}>
              <a href="#!" onClick={onClick} key={'toggleThe'+side+'SideNav'}><Fa icon="bars" size="5x"></Fa></a>
              </div>
    }

    return (
        
        <Container>


          <SideNav logo="https://mdbootstrap.com/img/logo/mdb-transparent.png" hidden triggerOpening={this.state.isLeftOpen} breakWidth={1300} className="deep-purple darken-4">
          
          </SideNav>
    
        </Container>
    );
  }
}

export default SideNavPage;