import React from "react";
import StatesNavbar from './states_navbar.js';
import Chart from 'react-apexcharts';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Enums from "./enums_m.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import api from './api'

const median = 2;
class DemographicsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "democrat",
            dataSMD: [],
            dataMMD: [],
            lineDataSMD: [],
            lineDataMMD: [],
            boxPlotsSMD: [],
            boxPlotsMMD: [],
            boxPlotsCompared: [],
            finishedUpdatingSMD: false,
            finishedUpdatingMMD: false,
        }
        for(let tag in Enums.groups){ 
            this.state.dataSMD[tag] = [];
        }
        for(let tag in Enums.groups){
            this.state.lineDataSMD[tag] = []
            this.state.boxPlotsSMD.push([
                <Tab id={Enums.groups[tag].toLowerCase() + "smd"} title={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1)} eventKey={Enums.groups[tag]}>
                    <BoxandWhisker boxData={this.state.dataSMD[tag]} lineData={this.state.lineDataSMD[tag]} type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " SMD"}/>
                </Tab>
            ])
        }
        /*for(let tag in Enums.groups){
            this.state.lineDataMMD[tag] = []
            this.state.boxPlotsMMD.push([
                <Tab id={Enums.groups[tag].toLowerCase() + "mmd"} title={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1)} eventKey={Enums.groups[tag]}>
                    <BoxandWhisker boxData={this.state.dataMMD[tag]} lineData={this.state.lineDataMMD[tag]} type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " MMD"}/>
                </Tab>
            ])
        }*/
        for(let tag in Enums.groups){
            this.state.boxPlotsCompared.push([
                <Tab id={Enums.groups[tag].toLowerCase() + "mix"} title={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1)} eventKey={Enums.groups[tag]}>
                    <BoxandWhiskerCompared boxDataSMD={this.state.dataSMD[tag]} lineDataSMD={this.state.lineDataSMD[tag]}
                        boxDataMMD={this.state.dataMMD[tag]} lineDataMMD={this.state.lineDataMMD[tag]} 
                        type={Enums.groups[tag][0].toUpperCase() + Enums.groups[tag].substring(1) + " Mix"}/>
                </Tab>
            ])
        }
    }
    componentDidMount(){
        api.getSmdBoxAndWhisker(this.props.stateName)
            .then((response)=> {
                let data = response.data;
                let dataArr = [];
                for(let tag in Enums.groups){
                    if(Enums.groups[tag].localeCompare(Enums.groups.Asian) == 0){
                        dataArr[tag] = data.asian;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.Black) == 0){
                        dataArr[tag] = data.black;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.White) == 0){
                        dataArr[tag] = data.white;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.Hispanic) == 0){
                        dataArr[tag] = data.latino;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.Native) == 0){
                        dataArr[tag] = data.nativeAmerican;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.Democrat) == 0){
                        dataArr[tag] = data.democrat;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.Republican) == 0){
                        dataArr[tag] = data.republican;
                    }
                }
                for(let tag in Enums.groups){
                    for(let i = 0; i < dataArr[tag].length; i++){
                        let box = dataArr[tag][i];
                        this.state.dataSMD[tag].push(
                            {
                                x: `District ${i+1}`,
                                y: [box.min, box.firstQuartile, box.median, box.thirdQuartile, box.max]          // boxplot data
                            }
                        ) 
                        this.state.lineDataSMD[tag].push({x: `District ${i+1}`, y: box.currentValue});
                    }
                }
                this.setState({finishedUpdatingSMD:true});
         })/*
         api.getMmdBoxAndWhisker(this.props.stateName)
            .then((response)=> {
                let data = response.data;
                let dataArr = [];
                for(let tag in Enums.groups){
                    if(Enums.groups[tag].localeCompare(Enums.groups.Asian) == 0){
                        dataArr[tag] = data.asian;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.Black) == 0){
                        dataArr[tag] = data.black;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.White) == 0){
                        dataArr[tag] = data.white;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.Hispanic) == 0){
                        dataArr[tag] = data.latino;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.Native) == 0){
                        dataArr[tag] = data.nativeAmerican;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.Democrat) == 0){
                        dataArr[tag] = data.democrat;
                    }
                    else if(Enums.groups[tag].localeCompare(Enums.groups.Republican) == 0){
                        dataArr[tag] = data.republican;
                    }
                }
                for(let tag in Enums.groups){
                    console.log(dataArr);
                    for(let i = 0; i < dataArr[tag].length; i++){
                        let box = dataArr[tag][i];
                        this.state.dataMMD[tag].push(
                            {
                                x: `District ${i+1}`,
                                y: [box.min, box.firstQuartile, box.median, box.thirdQuartile, box.max]          // boxplot data
                            }
                        ) 
                        this.state.lineDataMMD[tag].push({x: `District ${i+1}`, y: box.currentValue});
                    }
                }
                this.setState({finishedUpdatingMMD:true});
         })*/
    }
    render(){
        let use;
        if(this.props.type.localeCompare("smd")==0){
            use = ( <Tabs defaultActiveKey="" id="tab-smd" className="mb-3">
                        {this.state.finishedUpdatingSMD ? <></> : <>t</> }
                        {this.state.boxPlotsSMD}
                    </Tabs>)
        }
        else if(this.props.type.localeCompare("mmd")==0){
            use = ( <Tabs defaultActiveKey="" id="tab-mmd" className="mb-3">
                        {this.state.finishedUpdatingMMD ? <></> : <>t</> }
                        {this.state.boxPlotsMMD}
                    </Tabs>)
        }
        else{
            use = ( <Tabs defaultActiveKey="" id="tab-mix" className="mb-3">
                        {this.state.finishedUpdatingSMD & this.state.finishedUpdatingMMD ? <></> : <>t</> }
                        {this.state.boxPlotsCompared}
                    </Tabs>)
        }
        return(
            <div style={{width:"100%"}}>
                {use}
            </div>
        )
    }
}
/*
<StatesNavbar stateSelect={true}/>
                <Tabs defaultActiveKey="" id="tab-outer" className="mb-3">    
                    <Tab eventKey="smd" title="SMD">
                        <Tabs defaultActiveKey="" id="tab-smd" className="mb-3">
                            {this.state.boxPlotsSMD}
                        </Tabs>
                    </Tab>
                    <Tab eventKey="mmd" title="MMD">
                        <Tabs defaultActiveKey="" id="tab-mmd" className="mb-3">
                            {this.state.boxPlotsMMD}
                        </Tabs>
                    </Tab>
                    <Tab eventKey="mix" title="Compared">
                        <Tabs defaultActiveKey="" id="tab-mix" className="mb-3">
                            {this.state.boxPlotsCompared}
                        </Tabs>
                    </Tab>
                </Tabs>
*/

class BoxandWhisker extends React.Component {
    constructor(props) {
        super(props);
        let palette = this.props.palette == undefined ? 'pallete2' : this.props.palette;
        this.state = {
            series: [
                {
                    name: 'Current Value',
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
                <Chart options={this.state.options} series={this.state.series} type="boxPlot" height={600} />
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
                    name: 'Line of Best Fit - MMD',
                    type: 'line',
                    data: this.props.lineDataMMD,
                },
            ],
            options: {
                chart: {
                    type: 'line',
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