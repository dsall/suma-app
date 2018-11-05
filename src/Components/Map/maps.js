import React, { Component } from 'react';
import {Button } from 'mdbreact';
import {Map, google, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PersonModal from './Person';

var SUMA= {
    lat: 14.710434,
    lng:  -17.469909
};

var Person = {
    lat: 14.7505305,
    lng:  -17.3019528
}
export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };
 
      
  render() {
    const {google} = this.props;
    return (
     <Map google={this.props.google}
     initialCenter={{lat: 14.758674, lng: -17.415732}}
     zoom={12}
     >
        <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SUMA'}
        position={SUMA}
        onClick={this.onMarkerClick}
        icon={{
            url: "https://png.icons8.com/metro/1600/hospital-3.png",
            anchor: new google.maps.Point(32,32),
            scaledSize: new google.maps.Size(64,64)
          }}
        />
        <Marker 
            onClick={this.onMarkerClick}
            title={'The marker`s title will appear as a tooltip.'}
            name={'Mamadou Dia'}
            position={Person}
        />

      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <PersonModal />
        </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBHnzz0hde3j3HfOco2CCv8c6U7rFOQV-g")
  })(MapContainer)

