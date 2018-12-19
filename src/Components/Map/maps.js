import React, { Component } from 'react';
import {Button } from 'mdbreact';
import {Map, google, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PersonModal from './Person';
import axios from 'axios';


var SUMA= {
    lat: 14.710434,
    lng:  -17.469909
};


const Location = (props) => {
 
  return props.data.map(function (items, i){
    console.log(items  )
		return(
      <Marker 
      key={i}
      onClick={props.onMarkerClick}
      title={'The marker`s title will appear as a tooltip.'}
      name={items.phone}
      position={{lat: items.location.coords.latitude, lng: items.location.coords.longitude}}
     />
  );
});
}

const RenderMarkers = (props) => {
    for(let i=0; i < props.data.length; i++){
      return(
        <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SUMA'}
        position={{lat: props.data[i].location.coords.latitude,
        lng:  props.data[i].location.coords.longitude}}
        onClick={props.onMarkerClick}
        />
      );

    }


}
const style = {
  width: '85%',
  height: '100%'
}


let interval;
export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        data: {},
        data1: []
      };
      this.GetData();
    }

    componentDidMount() {
      interval = setInterval(() => {

          this.GetData();
  
      }, 10000);
    }
  
    componentWillUnmount() {
      clearInterval(interval);
    }

      GetData = async () => {
        const response = await axios.get('http://18.223.98.134:3002/suma');
        // console.log(response);
        if(response.data.success){
          this.setState({
              data1: response.data.data
          })
           console.log(this.state.data1)
  
        }
      }
     
     
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
    if(this.state.data1.length > 1){
      return (
          <Map google={this.props.google}
          initialCenter={{lat: 14.758674, lng: -17.415732}}
          zoom={12}
          style={style}
          >
                <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SUMA'}
                position={SUMA}
                onClick={this.onMarkerClick}
                icon={{
                    url: "https://png.icons8.com/metro/1600/hospital-3.png",
                    anchor: new google.maps.Point(10,10),
                    scaledSize: new google.maps.Size(20,20)
                  }}
                />
        
                <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SUMA'}
                position={{    lat: this.state.data1[0].location.coords.latitude,
                lng:  this.state.data1[0].location.coords.longitude}}
                onClick={this.onMarkerClick}
                />
                <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SUMA'}
                position={{    lat: this.state.data1[1].location.coords.latitude,
                lng:  this.state.data1[1].location.coords.longitude}}
                onClick={this.onMarkerClick}
                />
                
                <Location data={this.state.data1} onMarkerClick={this.onMarkerClick} />
           </Map>
       );

    }

    return(
      <div>
        <h1>Hello</h1>
      </div>
    );
  

  } 
}



export default GoogleApiWrapper({
    apiKey: ("AIzaSyBHnzz0hde3j3HfOco2CCv8c6U7rFOQV-g")
  })(MapContainer)

