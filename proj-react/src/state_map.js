import { React, useState }from "react";
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, useMap, Popup, Marker, GeoJSON } from 'react-leaflet'
import { useNavigate } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const position = [39, -98];

function SetBoundsStates(props) {
    const [bounds, setBounds] = useState()
    const map = useMap();
    let navigate = useNavigate(); 
    const routeChange = (state) =>{ 
      if(state != window.location.pathname)
        navigate(state);
    }
    function highlightState(e) {
        let layer = e.target;
        layer.setStyle({
            color: 'red',
        });
        layer.bringToFront();
    }
    function resetHighlight(e) {
        let layer = e.target;
        layer.setStyle({
            color: 'blue',
        });
        layer.bringToFront();
    }
    function zoomToState(e) {
        map.fitBounds(e.target.getBounds());

        let state = e.target.feature.properties.name.toLowerCase();
        
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
        data={props.mapData}
        onEachFeature= {onEachFeature}
        pathOptions={ {color: 'blue'}}
        />
      </>
    )
  }

  function resolvePosition(state) {
    switch(state.toLowerCase()) {
      case 'arizona':
        return [34, -112];
      case 'texas':
        return [31, -100];
      case 'utah':
        return [39, -112];
      default:
        return [39, -98]
    }
  }

  function resolveZoom(state) {
    switch(state.toLowerCase()) {
      case 'arizona':
        return 6;
      case 'texas':
        return 5;
      case 'utah':
        return 6;
      default:
        return 2
    }
  }


function StateMap(props) {
    let location = useLocation();
    console.log(props)
    let name = props.plan.split("/")[1].split("_")[0]
    let stateData = require('./'+props.plan)

    return(
        <>
        <MapContainer 
            style={{ height: 600, width: "100%" }} 
            center={resolvePosition(name)} 
            zoom={resolveZoom(name)} 
            scrollWheelZoom={false}
        >
           {<SetBoundsStates mapData={stateData}/>}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      </>
    );
}

export default StateMap;