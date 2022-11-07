import React from "react";
import StatesNavbar from './StatesNavbar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import StateMap from "./StateMap.js";
import Chart from 'react-apexcharts';
import api from './api'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class StatePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stateName: this.props.stateName,
            smdOpen: true,
        }
        this.state.stateName = this.props.stateName;
        console.log(this.state.stateName);
    }
    render(){
        var styledStateName = this.state.stateName[0].toUpperCase() + this.state.stateName.substring(1);
        return (
            <div style={{width:"100%"}}>
                <StatesNavbar stateSelect={true}/>
                <h2 style={{textAlign: 'center'}}>{styledStateName}</h2>
                <Container fluid className="text-center w-100 pb-1">
                    <Row className="gx-3 w-100">
                        <Col fluid key = {this.state.smdOpen}>
                            <Tabs defaultActiveKey="smd">
                                <Tab eventKey="smd" title="SMD">
                                    <Tabs defaultActiveKey="current" id="map-tabs" className="mb-3">
                                        <Tab eventKey="current" title="Current SMD">
                                            <StateMap stateName = {this.state.stateName} smdOpen={true}/>
                                        </Tab>
                                    </Tabs>
                                </Tab>
                                <Tab eventKey="mmd" title="MMD">
                                    <Tabs defaultActiveKey="mmd-avg" id="map-tabs" className="mb-3">
                                        <Tab eventKey="mmd-avg" title="Average MMD">
                                            <StateMap stateName = {this.state.stateName} smdOpen={false}/>
                                        </Tab>
                                    </Tabs>
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col>
                            <Tabs defaultActiveKey="summary">
                                <Tab eventKey="summary" title="Summary">
                                    <SummaryData stateName={this.state.stateName}/>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class SummaryData extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
        <Container>
            <Row>
                <Col>
                    <h5>Summary Data</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PopulationChart stateName={this.props.stateName}/>
                </Col>
            </Row>
        </Container>);
    }
}

class PopulationChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: '',
                data: [50000, 30000, 20000, 35874, 10000, 5000, 126]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                title: {
                    text: "Population & Demographics"
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '90%',
                        endingShape: 'rounded',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ["transparent"]
                },
                xaxis: {
                    categories: ['Total', 'Democrat', 'Republican', 'White', 'Black', 'Hispanic', 'Other'],
                },
                yaxis: {
                    title: {
                        text: 'Thousands of People'
                    }
                },
                fill: {
                    opacity: 1,
                    colors: ["#d42424", "#3232d1"]
                },
            },
        };
    }

    componentDidMount() {
        /*const fetchData = async () => {
            
            let currentState = this.props.stateName;
            const data = await api.getStateDemographics( (currentState.charAt(0).toUpperCase() + currentState.slice(1)) );
            
            let demographics = data.data;
            let demographicsArray = [ demographics.democratPopulation, demographics.republicanPopulation, demographics.whitePopulation, demographics.blackPopulation, demographics.hispanicPopulation, demographics.religiousPopulation, demographics.areligiousPopulation];
            console.log(demographicsArray)

            this.setState( {
                series: [{
                    name: '',
                    data: demographicsArray
                }]
            } );
            console.log(this.state.series)
        }
  
        fetchData()
          .catch(console.error);*/
    };


    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

export default StatePage;