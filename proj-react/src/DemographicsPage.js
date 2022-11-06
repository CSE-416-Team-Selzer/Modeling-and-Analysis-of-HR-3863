import React from "react";
import StatesNavbar from './StatesNavbar.js';
import Chart from 'react-apexcharts';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
// TODO: Figure out how to get data from the server to the client
class DemographicsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "democrat",
            data: [ // 0 = democrat, 1 = republican, 2 = black, 3 = white, 4 = hispanic, 5 = other
            ]
        }
        // populate the data field with the format below:
        /*
        */
    }
    handleSelect(key){
        this.setState({selected: key});
    }
    render(){
        // FOR ANEES: Just stick the by-district boxplot data in this format, the line data is handled.
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
        let districtLineData = [];
        for(let data of districtData){
            districtLineData.push({x: data.x, y: data.y[2]})     // y[2] will always be the midpoint
        }
        return(
            <div style={{width:"100%"}}>
                <StatesNavbar stateSelect={true}/>
                <Tabs defaultActiveKey="smd" id="tab-outer" className="mb-3">    
                    <Tab eventKey="smd" title="SMD">
                        <Tabs defaultActiveKey="democrat" id="tab-smd" className="mb-3">
                            <Tab eventKey="democrat" title="Democrat">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="Democrat SMD"/>
                            </Tab>
                            <Tab eventKey="republican" title="Republican">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="Republican SMD"/>     
                            </Tab>
                            <Tab eventKey="black" title="Black">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="Black SMD"/>    
                            </Tab>
                            <Tab eventKey="white" title="White">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="White SMD"/> 
                            </Tab>
                            <Tab eventKey="hispanic" title="Hispanic">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="Hispanic SMD"/>      
                            </Tab>
                            <Tab eventKey="other" title="Other">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="Other SMD"/>      
                            </Tab>
                        </Tabs>
                    </Tab>
                    <Tab eventKey="mmd" title="MMD">
                        <Tabs defaultActiveKey="democrat" id="tab-mmd" className="mb-3">
                            <Tab eventKey="democrat" title="Democrat">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="Democrat MMD"/>
                            </Tab>
                            <Tab eventKey="republican" title="Republican">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="Republican MMD"/>     
                            </Tab>
                            <Tab eventKey="black" title="Black">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="Black MMD"/>    
                            </Tab>
                            <Tab eventKey="white" title="White">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="White MMD"/> 
                            </Tab>
                            <Tab eventKey="hispanic" title="Hispanic">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="Hispanic MMD"/>      
                            </Tab>
                            <Tab eventKey="other" title="Other">
                                <BoxandWhisker boxData={districtData} lineData={districtLineData} type="Other MMD"/>      
                            </Tab>
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