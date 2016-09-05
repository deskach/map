import React, {Component} from "react";
import {Map, TileLayer, Circle, Polygon, Marker, Popup} from "react-leaflet";

export default class App extends Component {
  render() {
    const position = [51.505, -0.09];
    
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.1]}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
        <Circle center={position} radius={300}/>
        <Polygon
          positions={[[51.505, -0.08], [51.502, -0.07], [51.508, -0.06]]}/>
      </Map>
    )
  }
}
