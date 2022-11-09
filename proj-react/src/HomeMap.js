import { React, useState }from "react";
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, useMap, Popup, Marker, GeoJSON } from 'react-leaflet'
import { useNavigate } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import StateMap from "./StateMap.js";
const states = require('./geoJSON/us-states-pruned.json');
const az = require('./geoJSON/az.json')
const tx = require('./geoJSON/tx.json')
const ut = require('./geoJSON/ut.json')

const position = [39, -98];

function SetBoundsStates() {
    const [bounds, setBounds] = useState()
    
    const map = useMap();
    
    let navigate = useNavigate(); 
    const routeChange = (state) =>{ 
      if(state != window.location.pathname)
        navigate(state);
    }

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

        let state = e.target.feature.properties.name.toLowerCase();
        
        routeChange(state);
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
        data={states}
        onEachFeature= {onEachFeature}
        pathOptions={ {color: 'blue'}}
        />
      </>
    )
  }


function HomeMap() {
    let location = useLocation();

    return(
        <MapContainer 
            style={{ height: 600, width: "100%" }} 
            center={position} 
            zoom={2.5} 
            scrollWheelZoom={true}
        >
           { location.pathname ? <SetBoundsStates /> : <StateMap stateName = {location.pathname}/> }
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
}

export default HomeMap;