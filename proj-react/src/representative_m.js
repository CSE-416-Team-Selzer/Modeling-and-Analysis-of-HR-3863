import React from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Chart from 'react-apexcharts';
import SpecificElection from "./specific_election";

class Representative extends React.Component{
    construtor(props){
        this.state={
        }
    }
    componentDidMount(){
        this.setState({randPort: 10})
    }
    render(){
        return (
            <div>
                <div class="card-body text-center">
                    <img src={this.props.img} alt="" className="rounded-circle mb-3 img-fluid"/>
                    <h3 class="card-title">{this.props.name}</h3>
                    <p class="card-text">{this.props.flavor}</p>
                </div>
            </div>
        )
    }
}

export default Representative;