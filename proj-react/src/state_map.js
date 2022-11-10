import { React, useState, useMemo, useEffect }from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import api from './api'

const states = require('./geoJSON/us-states.json');
const az = require('./geoJSON/az.json')
const tx = require('./geoJSON/tx.json')
const ut = require('./geoJSON/ut.json')
let azs;
const azm = require('./geoJSON/azm.json')
let txs;
const txm = require('./geoJSON/txm.json')
let uts;
const utm = require('./geoJSON/utm.json')

const position = [39, -98];

api.getState()


function resolveStateName(state, smdOpen) {
  console.log(state)
  console.log(smdOpen)
  
  
  switch(state.toLowerCase()) {
    case 'arizona':
      if(smdOpen)
        return azs;
      return azm
    case 'texas':
      if(smdOpen)
        return txs;
      return txm
    case 'utah':
      if(smdOpen)
        return uts;
      return utm
    default:
      return az
  }
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

function SetBoundsStates(props) {
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
    
        layer.openPopup();
        
        layer.bringToFront();
    }

    function resetHighlight(e) {
        var layer = e.target;

        layer.setStyle({
            color: 'blue',
        });
    
        layer.closePopup();
        
        layer.bringToFront();
    }


    function zoomToState(e) {
        map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
      console.log(feature.properties)
        layer.bindPopup('District: ' + feature.properties.district.toString())

        layer.on({
            mouseover: highlightState,
            mouseout: resetHighlight,
            click: zoomToState
        });
    }
  
    return (
      <>
        <GeoJSON
        data={resolveStateName(props.stateName, props.smdOpen)}
        onEachFeature= {onEachFeature}
        pathOptions={ {color: 'blue'}}
        >
        </GeoJSON>
      </>
    )
  }


function StateMap(props) {
    console.log(props.smdOpen)

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

      const fetchData = async () => {
        let currentState = props.stateName
        let data = await api.getSmdPlanByTag("current", currentState);
       
        let stateGeoJson = data.data.geojson;

        console.log(stateGeoJson)

        if(currentState == "texas"){
          txs = stateGeoJson;
        } else if(currentState == "utah"){
          uts = stateGeoJson;
        } else if(currentState == "arizona"){
          azs = stateGeoJson;
        }

        // data = await api.getMmdPlanByTag("average", currentState);
        // stateGeoJson = data.data.geojson;

        // if(currentState == "texas"){
        //   txm = stateGeoJson;
        // } else if(currentState == "utah"){
        //   utm = stateGeoJson;
        // } else if(currentState == "arizona"){
        //   azm = stateGeoJson;
        // }

        setLoading(false)
      }

      fetchData()
        .catch(console.error);
    },[])

    if(!isLoading)
      return(
          <MapContainer 
              style={{ height: 500, width: "100%" }} 
              center={resolvePosition(props.stateName)} 
              zoom={resolveZoom(props.stateName)} 
              scrollWheelZoom={true}
          >
              <SetBoundsStates stateName = {props.stateName} smdOpen = {props.smdOpen}/>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      );
}

export default StateMap;