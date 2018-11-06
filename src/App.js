import React, { Component } from 'react';
import {Button } from 'mdbreact';
import Map from './Components/Map/maps';
import SideNavPage from './Components/SideBar/SideBar';
import  './App.css';
import EmergencyCard from './Components/EmergencyCard/Emergency';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div>
            <EmergencyCard />
        </div>
        <div>
            <Map />
        </div>

        
      </div>
      
    );
  }
}

export default App;
