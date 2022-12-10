import React from "react";
import StatesNavbar from './states_navbar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import StateMap from "./state_map.js";
import Chart from 'react-apexcharts';
import api from './api'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DemographicsPage from "./demographics_page.js";

class StatePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stateName: this.props.stateName,
            smdOpen: true,
            test: false,
        }
        this.state.stateName = this.props.stateName;
        console.log(this.state.stateName);
        /* FOR ANEES - Same thing you did with Demographics, just for the plan geojsons.
        */
    }

    render(){
        var styledStateName = this.state.stateName[0].toUpperCase() + this.state.stateName.substring(1);
        // note: alter state map so that it can take a plan tag and pull the corresponding geojson out of the server
        return (
            <div style={{width:"100%"}}>
                <StatesNavbar stateSelect={true}/>
                <h2 style={{textAlign: 'center'}}>{styledStateName}</h2>
                <Container fluid className="text-center w-100 pb-1">
                    <Row className="gx-3 w-100">
                        <Col fluid key = {this.state.smdOpen}>
                            <Tabs defaultActiveKey="current">
                                <Tab eventKey="current" title="Current Plan & Comparisons">
                                    <CurrentPlanSubpage/>
                                </Tab>
                                <Tab eventKey="smd" title="SMD Ensemble">
                                    <StateSubpage type="smd"/>
                                </Tab>
                                <Tab eventKey="mmd" title="MMD Ensemble">
                                    <StateSubpage type="mmd"/>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
/*
<Col>
                            <Tabs defaultActiveKey="demog">
                                <Tab eventKey="demog" title="Demographics">
                                    <PopulationChart stateName={this.state.stateName}/>
                                </Tab>
                                <Tab eventKey="electsplits" title="Electoral Splits">
                                    [PLACEHOLDER]
                                </Tab>
                            </Tabs>
                        </Col>
*/
/*
<Tabs defaultActiveKey="smd">
                                <Tab eventKey="smd" title="SMD">
                                    <Tabs defaultActiveKey="current" id="map-tabs" className="mb-3">
                                        <Tab eventKey="current" title="Current SMD">
                                            <StateMap stateName = {this.state.stateName} tag="extremeDemocrat" smdOpen={true}/>
                                        </Tab>
                                    </Tabs>
                                </Tab>
                                <Tab eventKey="mmd" title="MMD">
                                    <Tabs defaultActiveKey="mmd-avg" id="map-tabs" className="mb-3">
                                        <Tab eventKey="mmd-avg" title="Average MMD">
                                            <StateMap stateName = {this.state.stateName} tag="extremeDemocrat" smdOpen={false}/>
                                        </Tab>
                                    </Tabs>
                                </Tab>
                            </Tabs>
*/

class CurrentPlanSubpage extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
        <Container fluid className="text-center w-100 pb-1">
            <Row className="gx-3 w-100">
                <Col>
                    [MAP PLACEHOLDER]
                </Col>
                <Col fluid>
                    <Tabs defaultActiveKey="demos">
                        <Tab eventKey="demos" title="Demographics">
                            <PopulationChart stateName={this.state.stateName}/>
                        </Tab>
                        <Tab eventKey="cursmd" title="Current Plan vs SMD">
                            [COMPARED ENSEMBLE DATA]
                        </Tab>
                        <Tab eventKey="curmmd" title="Current Plan vs MMD">
                            [COMPARED ENSEMBLE DATA]
                        </Tab>
                        <Tab eventKey="smdmmd" title="SMD vs MMD">
                            [COMPARED ENSEMBLE DATA]
                        </Tab>
                        <Tab eventKey="bwmix" title="Box & Whisker Compared Points">
                            <DemographicsPage type="mix"/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>);
    }
}

class StateSubpage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
        <Container fluid className="text-center w-100 pb-1">
            <Row className="gx-3 w-100">
                <Col>
                <DropdownButton id="dropdown-select-plan" variant="secondary" title="Select a Plan">
                    <Dropdown.Item href={"#/type/"+this.props.type+"/tag/example"}>{this.props.type.toUpperCase()} Example Plan</Dropdown.Item>
                </DropdownButton>
                </Col>
                <Col fluid>
                    <Tabs defaultActiveKey="demos">
                        <Tab eventKey="demos" title="Plan vs Current">
                            [COMPARED DATA]
                        </Tab>
                        <Tab eventKey="cursmd" title="Box & Whisker Demographic Breakdowns">
                            <DemographicsPage type={this.props.type}/>
                        </Tab>
                        <Tab eventKey="curmmd" title="Election Data">
                            [ELECTION DATA PER-DISTRICT]
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>)
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
                data: [50000, 30000, 20000, 35874, 10000]
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
                    categories: ['Democrat', 'Republican', 'Caucasian', 'African American', 'Latino', 'Asian', 'Native American'],
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
        const fetchData = async () => {
            let currentState = this.props.stateName;
            const req = await api.getStateDemographics(currentState);
            let demographics = req.data;
            let demographicsArray = [ demographics.democratPopulation, demographics.republicanPopulation, demographics.whitePopulation, demographics.blackPopulation, demographics.hispanicPopulation];
            this.setState( {
                series: [{
                    name: '',
                    data: demographicsArray
                }]
            } );
        }
        fetchData()
          .catch( err => {console.error(err)});
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