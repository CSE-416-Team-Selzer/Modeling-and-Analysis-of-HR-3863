import React from "react";
import StatesNavbar from './StatesNavbar.js';
import Chart from 'react-apexcharts';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Enums from "./Enums.js";
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
        }
        // FOR ANEES: fill the following code
        /*
        for(let tag of Enums.groups){
            // get a the boxplot data for that enum tag with x = the district number and y = the boxplot data
            //formatted like this:
            [
                {
                    x: "district 1",
                    y: [1, 2, 3, 4, 5]          // boxplot data
                },
                {
                    x: "district 2",
                    y: [5,6,7,8,9]
                }
            ]
        }
        for(let data of this.state.data){

        }
        */
       // delete this after you do that.
       for(let tag in Enums.groups){ 
            this.state.dataSMD[tag] = [
                {
                    x: "district 1",
                    y: [1, 2, 3, 4, 5]          // boxplot data
                },
                {
                    x: "district 2",
                    y: [5,6,7,8,9]
                }
            ];
            this.state.dataMMD[tag] = [
                {
                    x: "district 1",
                    y: [1, 2, 3, 4, 5]          // boxplot data
                },
                {
                    x: "district 2",
                    y: [5,6,7,8,9]
                }
            ]
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
    }
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
                <Tabs defaultActiveKey="smd" id="tab-outer" className="mb-3">    
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
                </Tabs>
            </div>
        )
    }
}

class BoxandWhisker extends React.Component {
    constructor(props) {
        super(props);
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