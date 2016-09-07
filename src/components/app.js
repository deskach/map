import React, {Component} from "react";
import {Map, TileLayer, Circle, Polygon, Marker, Popup} from "react-leaflet";
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"

export default class App extends Component {
  _onEdited() {
    console.log('onEditPath');
  }

  _onCreated() {
    console.log('onEditPath');
  }

  _onDeleted() {
    console.log('onEditPath');
  }

  render() {
    const position = [51.505, -0.09];

    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <FeatureGroup>
          <EditControl
            position='topright'
            onEdited={() => this._onEdited()}
            onCreated={() => this._onCreated()}
            onDeleted={() => this._onDeleted()}
            draw={{
              rectangle: true
            }}
          />
        </FeatureGroup>
      </Map>
    )
  }
}

/*
<Marker position={[51.505, -0.1]}>
  <Popup>
    <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
  </Popup>
</Marker>
<Circle center={position} radius={300}/>
<Polygon
  positions={[[51.505, -0.08], [51.502, -0.07], [51.508, -0.06]]}/>
*/
