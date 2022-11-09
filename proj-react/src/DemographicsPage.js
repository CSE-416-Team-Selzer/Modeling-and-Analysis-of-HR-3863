import React from "react";
import StatesNavbar from './StatesNavbar.js';
import Chart from 'react-apexcharts';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Enums from "./Enums.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import api from './api'

// TODO: Figure out how to get data from the server to the client
class DemographicsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "democrat",
            dataSMD: [ // 0 = democrat, 1 = republican, 2 = black, 3 = white, 4 = hispanic, 5 = other
            ],
            dataMMD: [],
            lineDataSMD: [], // dw about this, its generated
            lineDataMMD: [],
            boxPlotsSMD: [],
            boxPlotsMMD: [],
            boxPlotsCompared: [],
        }

        //initialize otherwise errors
        for(let tag in Enums.groups){ 
            this.state.dataSMD[tag] = [
                
            ];
            
            this.state.dataMMD[tag] = [
                
            ]
        }

        console.log(props.stateName)

       for(let tag in Enums.groups){ 
            console.log(tag)
            let dataSMD = this.state.dataSMD;
            api.getSmdEnsembleDistrictsByTag(tag, "arizona")
                .then( function (response) {
                    let data = response.data;

                    for(let i = 0; i < data.length; i++){
                        let box = data[i].demographicsBox;
                        dataSMD[tag].push(
                            {
                                x: `district ${i+1}`,
                                y: [box.min, box.firstQuartile, box.median, box.thirdQuartile, box.max]          // boxplot data
                            }
                        ) 
                    }
            })

            let dataMMD = this.state.dataMMD;
            api.getMmdEnsembleDistrictsByTag(tag, "arizona")
                .then( function (response) {
                    console.log(response)
                    let data = response.data;

                    for(let i = 0; i < data.length; i++){
                        let box = data[i].demographicsBox;
                        dataMMD[tag].push(
                            {
                                x: `district ${i+1}`,
                                y: [box.min, box.firstQuartile, box.median, box.thirdQuartile, box.max]          // boxplot data
                            }
                        ) 
                    }
            })
        }
        
        for(let tag in Enums.groups){
            this.state.lineDataSMD[tag] = []
            for(let data of this.state.dataSMD[tag]){
                this.state.lineDataSMD[tag].push({x: data.x, y: data.y[2]})     // y[2] will always be the midpoint
            }
            this.state.boxPlotsSMD.push([
                <Tab id={Enums.groups[tag].toLowerCase() + "smd"} title={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1)} eventKey={Enums.groups[tag]}>
                    <BoxandWhisker boxData={this.state.dataSMD[tag]} lineData={this.state.lineDataSMD[tag]} type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " SMD"}/>
                </Tab>
            ])
        }
        for(let tag in Enums.groups){
            this.state.lineDataMMD[tag] = []
            for(let data of this.state.dataMMD[tag]){
                this.state.lineDataMMD[tag].push({x: data.x, y: data.y[2]})     // y[2] will always be the midpoint
            }
            this.state.boxPlotsMMD.push([
                <Tab id={Enums.groups[tag].toLowerCase() + "mmd"} title={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1)} eventKey={Enums.groups[tag]}>
                    <BoxandWhisker boxData={this.state.dataMMD[tag]} lineData={this.state.lineDataMMD[tag]} type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " MMD"}/>
                </Tab>
            ])
        }
        for(let tag in Enums.groups){
            this.state.boxPlotsCompared.push([
                <Tab id={Enums.groups[tag].toLowerCase() + "mix"} title={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1)} eventKey={Enums.groups[tag]}>
                     <Container fluid id={Enums.groups[tag].toLowerCase() + "mix-cont"}>
                    <Row id={Enums.groups[tag].toLowerCase() + "mix-row"}>
                        <Col id={Enums.groups[tag].toLowerCase() + "mix-col1"}>
                    <BoxandWhisker boxData={this.state.dataSMD[tag]} lineData={this.state.lineDataSMD[tag]} type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " SMD"}/><br/>
                    </Col>
                        <Col id={Enums.groups[tag].toLowerCase() + "mix-col2"}>
                    <BoxandWhisker boxData={this.state.dataMMD[tag]} lineData={this.state.lineDataMMD[tag]} type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " MMD"}/>
                        </Col>
                    </Row>
                    </Container>
                </Tab>
            ])
        }
    }
    //failed attempts at overlaying them
    /*<BoxandWhiskerCompared boxDataSMD={this.state.dataSMD[tag]} lineDataSMD={this.state.lineDataSMD[tag]}
                    boxDataMMD={this.state.dataMMD[tag]} lineDataMMD={this.state.lineDataMMD[tag]} 
                    type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " Mix"}/>
    */
   /*
   <Container fluid id={Enums.groups[tag].toLowerCase() + "mix-cont"}>
                    <Row id={Enums.groups[tag].toLowerCase() + "mix-row"}>
                        <Col id={Enums.groups[tag].toLowerCase() + "mix-col1"}>
                    <BoxandWhisker boxData={this.state.dataSMD[tag]} lineData={this.state.lineDataSMD[tag]} type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " SMD"}/><br/>
                    </Col>
                        <Col id={Enums.groups[tag].toLowerCase() + "mix-col2"}>
                    <BoxandWhisker boxData={this.state.dataMMD[tag]} lineData={this.state.lineDataMMD[tag]} type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " MMD"}/>
                        </Col>
                    </Row>
                    </Container>
   */
  /*<Container fluid id={Enums.groups[tag].toLowerCase() + "mix-cont"}>
                    <Row id={Enums.groups[tag].toLowerCase() + "mix-row"}>
                        <Col id={Enums.groups[tag].toLowerCase() + "mix-col1"} style={{position:'absolute', top: 170, left: 0}}>
                    <BoxandWhisker boxData={this.state.dataSMD[tag]} lineData={this.state.lineDataSMD[tag]} type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " Mix"}/><br/>
                        </Col>
                        <Col id={Enums.groups[tag].toLowerCase() + "mix-col2"} style={{position:'absolute', top: 170, left: 0}}>
                    <BoxandWhisker boxData={this.state.dataMMD[tag]} lineData={this.state.lineDataMMD[tag]} type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " Mix"}/>
                        </Col>
                    </Row>
                    </Container>
  */
    render(){
        
        let districtData = [
            {
                x: "district 1",
                y: [1, 2, 3, 4, 5]          // boxplot data
            },
            {
                x: "district 2",
                y: [5,6,7,8,9]
            }
        ];
        return(
            <div style={{width:"100%"}}>
                <StatesNavbar stateSelect={true}/>
                <Tabs defaultActiveKey="mix" id="tab-outer" className="mb-3">    
                    <Tab eventKey="smd" title="SMD">
                        <Tabs defaultActiveKey="democrat" id="tab-smd" className="mb-3">
                            {this.state.boxPlotsSMD}
                        </Tabs>
                    </Tab>
                    <Tab eventKey="mmd" title="MMD">
                        <Tabs defaultActiveKey="democrat" id="tab-mmd" className="mb-3">
                            {this.state.boxPlotsMMD}
                        </Tabs>
                    </Tab>
                    <Tab eventKey="mix" title="Compared">
                        <Tabs defaultActiveKey="democrat" id="tab-mmd" className="mb-3">
                            {this.state.boxPlotsCompared}
                        </Tabs>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

class BoxandWhisker extends React.Component {
    constructor(props) {
        super(props);
        let palette = this.props.palette == undefined ? 'pallete2' : this.props.palette;
        this.state = {
            series: [
                {
                    name: 'Line of Best Fit',
                    type: 'line',
                    data: this.props.lineData,
                },
                {
                    name: 'Box & Whisker Data',
                    type: 'boxPlot',
                    data: this.props.boxData,
                },
            ],
            options: {
                chart: {
                    type: 'boxPlot',
                    height: 350,
                    toolbar:{
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    }
                },
                title: {
                    text: this.props.type + ' Demographic Distribution',
                    align: 'left'
                },
                stroke:{
                    show: true,
                    curve: 'smooth',
                },
                theme:{
                    mode: 'light',
                    palette: palette
                }
            },

        };
    }

    
    render() {
        

        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="boxPlot" height={350} />
            </div>
        );
    }
}

class BoxandWhiskerCompared extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [
                {
                    name: 'Line of Best Fit - SMD',
                    type: 'line',
                    data: this.props.lineDataSMD,
                },
                {
                    name: 'Box & Whisker Data - SMD',
                    type: 'boxPlot',
                    data: this.props.boxDataSMD,
                },
                {
                    name: 'Line of Best Fit - MMD',
                    type: 'line',
                    data: this.props.lineDataMMD,
                },
                {
                    name: 'Box & Whisker Data - MMD',
                    type: 'boxPlot',
                    data: this.props.boxDataMMD,
                },
            ],
            options: {
                chart: {
                    type: 'boxPlot',
                    height: 350,
                    stacked: true,
                    toolbar:{
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    }
                },
                title: {
                    text: this.props.type + ' Demographic Distribution',
                    align: 'left'
                },
                stroke:{
                    show: true,
                    curve: 'smooth',
                },
                fill: {
                    opacity: .5,
                    type: 'solid',
                },
                theme:{
                    mode: 'light',
                    palette: 'palette2'
                }
            },

        };
    }

    
    render() {
        

        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="boxPlot" height={350} />
            </div>
        );
    }
}

export default DemographicsPage