import { React, useState, useMemo }from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
const states = require('./geoJSON/us-states.json');
const az = require('./geoJSON/az.json')
const tx = require('./geoJSON/tx.json')
const ut = require('./geoJSON/ut.json')

const position = [39, -98];

function SetBoundsStates() {
    const [bounds, setBounds] = useState()
    const map = useMap()
  
    const innerHandlers = useMemo(
      () => ({
        click(e) {
            console.log(e.target);
            map.setView([e.latlng.lat, e.latlng.lng], 6);
        },
      }),
      [map],
    )

    function highlightState(e) {
        var layer = e.target;

        layer.setStyle({
            color: 'red',
        });
    
       
        layer.bringToFront();
    }

    function resetHighlight(e) {
        var layer = e.target;

        layer.setStyle({
            color: 'blue',
        });
    
       
        layer.bringToFront();
    }


    function zoomToState(e) {
        map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightState,
            mouseout: resetHighlight,
            click: zoomToState
        });
    }
  
    return (
      <>
        <GeoJSON
        data={tx}
        onEachFeature= {onEachFeature}
        pathOptions={ {color: 'blue'}}
        />
      </>
    )
  }


function StateMap() {
    return(
        <MapContainer 
            style={{ height: 500, width: 800 }} 
            center={position} 
            zoom={2.5} 
            scrollWheelZoom={true}
        >
            <SetBoundsStates />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
}

export default StateMap;