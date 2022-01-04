import React,{Component} from 'react';
import {Map,Marker,GoogleApiWrapper,InfoWindow} from 'google-maps-react';


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
      return (
        <Map google={this.props.google}
        zoom={14}
        
        initialCenter={
          {
            lat: 13.0827,
            lng: 80.2707
          }
        }
            onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                  name={'Chennai'} />
   
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      )
    }
  }


 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyD2fw3iX3szHAZ-kUwcbtRmYZQDGDBziSI")
})(MapContainer)