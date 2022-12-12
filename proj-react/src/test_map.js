import React from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import api from './api'

class TestMap extends React.Component {
    constructor(props){
        super(props);
        this.state={ }
    }
    render() {
        return (
            <p>HI</p>
        )
    }
    
}
export default TestMap;