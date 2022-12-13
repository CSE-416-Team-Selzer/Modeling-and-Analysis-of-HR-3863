import React from "react";
import StatesNavbar from './states_navbar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import StateMap from "./state_map.js";
import TestMap from "./test_map.js";
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
            currentPlan: {},
        }
        this.state.stateName = this.props.stateName;
        console.log(this.state.stateName);
        /* FOR ANEES - Same thing you did with Demographics, just for the plan geojsons.
        */
    }
    componentDidMount(){
        console.log("test")
        api.getSmdPlanByTag("current", this.props.stateName).then(
            response=>{
                console.log("works here")
                let data = response.data;
                this.setState({currentPlan: data});
        })
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
                                    <CurrentPlanSubpage 
                                        state={this.props.stateName} 
                                        curplan={this.state.currentPlan}
                                    />
                                </Tab>
                                <Tab eventKey="smd" title="SMD Ensemble">
                                    <StateSubpage 
                                        type="smd" 
                                        state={this.props.stateName}
                                        />
                                </Tab>
                                <Tab eventKey="mmd" title="MMD Ensemble">
                                    <StateSubpage 
                                        type="mmd" 
                                        state={this.props.stateName}/>
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
        this.state={
            seats: 9,
            plan: this.props.curplan,
        };
    }
    componentDidMount(){
        api.getNumSeats(this.props.state).then(
            response => {
                this.setState({seats: response.data});
            }
        )
    }
    render(){
        return(
        <Container fluid className="text-center w-100 pb-1">
            <Row className="gx-3 w-100">
                <Col>
                    <TestMap name="StateMap"/>
                </Col>
                <Col fluid>
                    <Tabs defaultActiveKey="statesum">
                        <Tab eventKey="statesum" title="State Summary">
                            <SummaryValueField name="Seats" value={this.state.seats}/>
                            <PopulationChart stateName={this.props.state}/>
                            <VoteSplitChart stateName={this.props.state}/>
                        </Tab>
                        <Tab eventKey="cursmd" title="Current Plan vs SMD">
                            <Row>
                                <Col>
                                    <SingleSummaryData isMmd={false} tag="current" stateName={this.props.state}/>
                                </Col>
                                <Col>
                                    <SummaryData name="SMD Ensemble" textAlign="text-right" stateName={this.props.state}/>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="curmmd" title="Current Plan vs MMD">
                            <Row>
                                <Col>
                                    <SingleSummaryData isMmd={false} tag="current" stateName={this.props.state}/>
                                </Col>
                                <Col>
                                    <SummaryData name="MMD Ensemble" textAlign="text-right" stateName={this.props.state}/>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="smdmmd" title="SMD vs MMD">
                            <Row>
                                <Col>
                                    <SummaryData name="SMD" textAlign="text-left" stateName={this.props.state}/>
                                </Col>
                                <Col>
                                    <SummaryData name="MMD" textAlign="text-right" stateName={this.props.state}/>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="bwmix" title="Box & Whisker Compared Points">
                            <DemographicsPage type="mix" stateName={this.props.state}/>
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
        let isMmd = true;
        if(this.props.type.localeCompare("smd")==0){
            isMmd = false;
        }
        this.state = {
            mmd: isMmd,
            planSelected: false,
            plan: {},
            selectedTag: "",
        }
    }
    selectPlan = (tag) => {
        this.setState({selectedTag: tag});
        if(!this.state.mmd){
            api.getSmdPlanByTag(tag, this.props.state).then(response =>{
                let data = response.data;
                this.setState({plan: data});
            })
        }
        else {
            api.getMmdPlanByTag(tag, this.props.state).then(response =>{
                let data = response.data;
                this.setState({plan: data});
            })
        }
    }
    render(){
        return(
        <Container fluid className="text-center w-100 pb-1">
            <Row className="gx-3 w-100">
                <Col>
                <DropdownButton id="dropdown-select-plan" variant="secondary" title="Select an 'Interesting' Plan">
                    {this.state.mmd ? 
                    <Dropdown.Item onClick={() => this.selectPlan("average")} href={"#/selected-plan"}>Average {this.props.type.toUpperCase()} Plan</Dropdown.Item> : <></>}
                    <Dropdown.Item onClick={() => this.selectPlan("extremeDemocrat")} href={"#/selected-plan"}>Extreme Democrat {this.props.type.toUpperCase()} Plan</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.selectPlan("extremeRepublican")} href={"#/selected-plan"}>Extreme Republican {this.props.type.toUpperCase()} Plan</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.selectPlan("maximumOpportunityDistricts")} href={"#/selected-plan"}>Maximum Opportunity Districts {this.props.type.toUpperCase()} Plan</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.selectPlan("minimumOpportunityDistricts")} href={"#/selected-plan"}>Minimum Opportunity Districts {this.props.type.toUpperCase()} Plan</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.selectPlan("maximumSafeDistricts")} href={"#/selected-plan"}>Maximum Safe Districts {this.props.type.toUpperCase()} Plan</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.selectPlan("minimumSafeDistricts")} href={"#/selected-plan"}>Minimum Safe Districts {this.props.type.toUpperCase()} Plan</Dropdown.Item>
                </DropdownButton>
                </Col>
                <Col fluid>
                    <Tabs defaultActiveKey="demos">
                        <Tab eventKey="cursmd" title="Box & Whisker Demographic Breakdowns">
                            <DemographicsPage type={this.props.type} stateName={this.props.state}/>
                        </Tab>
                        <Tab eventKey="demos" title="Plan vs Current">
                            <Row>
                                <Col>
                                    <SingleSummaryData isMmd={false} tag="current" stateName={this.props.state}/>
                                </Col>
                                <Col>
                                    {this.state.planSelected ?
                                        <SingleSummaryData isMmd={this.state.mmd} tag={this.state.selectedTag} stateName={this.props.state}/> 
                                        : <h4>Select a Plan</h4>
                                    }
                                </Col>
                            </Row>
                            {this.state.planSelected ? this.state.plan.tag : <>[PLACEHOLDER]</>}
                        </Tab>
                        <Tab eventKey="curmmd" title="Election Data">
                            <VotesChart stateName={this.props.state}/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>)
    }
}

class VotesChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        series: [{
          data: []
        }],
        options: {
          chart: {
            type: 'bar',
            width: "100%",
            height: 100,
            toolbar:{
                show: false,
            },
            zoom: {
                enabled: false,
            }
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ["test"],
          }
        },
      };
    }
    componentDidMount() { // just testing/showcasing requests here
      const fetchData = async () => {
          /*
  
          let res = await api.getStateDemographics("arizona");
          console.log(res.data)

          res = await api.getSmdPlanByTag("extremeDemocrat", "arizona");
          console.log(res.data)

          res = await api.getMmdPlanByTag("average", "arizona");
          console.log(res.data)

          res = await api.getSmdEnsembleData("arizona");
          console.log(res.data)

          res = await api.getMmdEnsembleData("arizona");
          console.log(res.data)

          res = await api.getSmdBoxAndWhisker("arizona");
          console.log(res.data)

          res = await api.getMmdBoxAndWhisker("arizona");
          console.log(res.data)

          res = await api.getNumSeats("arizona");
          console.log(res.data)

          res = await api.getVoteShare("arizona");
          console.log(res.data)
          */
      }
  
      fetchData()
        .catch(console.error);


        

        this.setState({
            series:[{
                name:'District X Votes',
                data: [4000, 2000, 1000, 500] // district votes
            }],
            options: {
                title: {
                    text: "District X Votes"
                },
                xaxis:{
                    categories: ["Rep 1 (D. Asain) [W]", "Rep 2 (R. Caucasian) [W]", "Rep 3 (D. Af. Am.) [L]", "Rep 4 (R. Nat. Am.) [L]"] // representative names
                }
            }
        })
    };
    render() {
      return (
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="bar" height={250} />
        </div>
      );
    }
  }

class SummaryData extends React.Component {
    constructor(props){
        super(props);
        // props: name, textAlign
        this.state = {
            safeDistricts: [1,2,3],
            opportunityReps: [1,2,3],
            democratReps: [1,2,3],
            repReps: [1,2,3],
            
        }
    }
    changeData(data){
        this.setState({
            safeDistricts:[data.minSafeDistricts, data.avgSafeDistrits,data.maxSafeDistricts],
            opportunityReps:[data.minOpportunityReps, data.avgOpportunityReps, data.maxOpportunityReps],
            democratReps: [data.minDemocratReps, data.avgDemocratReps, data.maxDemocratReps],
            repReps: [data.minRepublicanReps, data.avgRepublicanReps, data.maxRepublicanReps],
        })
    }
    componentDidMount(){
        if(this.props.name.localeCompare("SMD")==0){
            api.getSmdEnsembleData(this.props.stateName).then(
                response => {
                    let data = response.data;
                    this.changeData(data);
                }
            )
        }
        else if(this.props.name.localeCompare("MMD")==0){
            api.getMmdEnsembleData(this.props.stateName).then(
                response => {
                    let data = response.data;
                    this.changeData(data)
                }
            )
        }
    }
    render(){
        return(
        <Container fluid className={this.props.textAlign + " w-100 pb-1"}>
            <Row>
                <Col>
                    <h5>{this.props.name} Summary Data</h5>
                </Col>
            </Row>
            <Row>
                    <MinAvgMax name="Safe Districts" values={this.state.safeDistricts}/>
            </Row>
            <Row>
                    <MinAvgMax name="Opportunity Reps" values={this.state.opportunityReps}/>
            </Row>
            <Row>
                    <MinAvgMax name="Democrat Reps" values={this.state.democratReps}/>
            </Row>
            <Row>
                    <MinAvgMax name="Republican Reps" values={this.state.repReps}/>
            </Row>
        </Container>);
    }
}

class SingleSummaryData extends React.Component {
    constructor(props){
        super(props);
        // recieved props are fed geojson property data 'props'
        this.state = {
            safeDistricts: 3,
            opportunityReps: 3,
            democratReps: 3,
            repubReps: 3,
            rVotes: 3,
            dVotes: 3,
            mmd: this.props.isMmd,
            tag: this.props.tag
        }
    }
    componentDidMount(){
        // recieved props are fed geojson property data 'props'
        if(!this.state.mmd){
            api.getSmdPlanByTag(this.state.tag, this.props.stateName).then(
                response=>{
                    let properties = require("./"+response.data.geojson.substring(0, response.data.geojson.length-5)+"_nogeo.json");
                    console.log(properties)
                    let safeDTotal = 0;
                    for(let x in properties.safeDistrict){
                        if(properties.safeDistrict[x]){
                            safeDTotal += 1;
                        }
                    }
                    let oppRepTotal = 0;
                    for(let x in properties.opportunityDistrict){
                        if(properties.opportunityDistrict[x]){
                            oppRepTotal+=1;
                        }
                    }
                    let demRepTotal = 0;
                    // ???
                    let repRepTotal = 0;
                    // ???
                    let dVoteTotal = 0;
                    for(let x in properties.demVotes){
                        dVoteTotal += properties.demVotes[x];
                    }
                    let rVoteTotal = 0;
                    for(let x in properties.repVotes){
                        console.log(properties.repVotes[x]);
                        rVoteTotal += properties.repVotes[x];
                    }
                    console.log(rVoteTotal);
                    this.setState({
                        safeDistricts: safeDTotal,
                        opportunityReps: oppRepTotal,
                        democratReps: demRepTotal,
                        repubReps: repRepTotal,
                        dVotes: dVoteTotal,
                        rVotes: rVoteTotal
                    })
                }
            )
        }
    }
    render(){
        return(
            <Container fluid className={this.props.textAlign + " w-100 pb-1"}>
                <Row>
                    <Col>
                        <h5>{this.props.name} Summary Data</h5>
                    </Col>
                </Row>
                <Row>
                    <SummaryValueField name="Safe Districts" value={this.state.safeDistricts}/>
                </Row>
                <Row>
                    <SummaryValueField name="Opportunity Reps" value={this.state.opportunityReps}/>
                </Row>
                <Row>
                    <SummaryValueField name="Democrat Reps" value={this.state.democratReps}/>
                </Row>
                <Row>
                    <SummaryValueField name="Republican Reps" value={this.state.repubReps}/>
                </Row>
                <Row>
                    <VoteSplitChartMini democratVotes={this.state.dVotes} republicanVotes={this.state.rVotes}/>
                </Row>
            </Container>
        )
    }
}

class SummaryValueField extends React.Component{
    constructor(props){
        super(props);
        // takes a property value, and another property name which is just a string
    }
    render(){
        return(
            <Container fluid className="text-left" style={{borderBottom:"1px solid black", marginBottom:"3px"}}>
                <Row>
                    <Col>
                        <h6 style={{margin:"1px", fontWeight:"600", padding:"0px"}}>
                            {this.props.name}
                        </h6>
                    </Col>
                </Row>
                <Row style={{borderTop:"1px solid black"}}>
                    <Col>
                        <span>
                           Value: {this.props.value}
                        </span>
                    </Col>
                </Row>
            </Container>
        )
    }
}

class MinAvgMax extends React.Component{
    constructor(props){
        super(props);
        // takes a property values with fields [min, avg, max], and another property name which is just a string
    }
    render(){
        return(
            <Container fluid className="text-left" style={{borderBottom:"1px solid black", marginBottom:"3px"}}>
                <Row>
                    <Col>
                        <h6 style={{margin:"1px", fontWeight:"600", padding:"0px"}}>
                            {this.props.name}
                        </h6>
                    </Col>
                </Row>
                <Row style={{borderTop:"1px solid black"}}>
                    <Col>
                            <span>
                                Minimum: {this.props.values[0]}
                            </span>
                        </Col>
                        <Col>
                            <span>
                                Average: {this.props.values[1]}
                            </span>
                        </Col>
                        <Col>
                            <span>
                                Maximum: {this.props.values[2]}
                            </span>
                        </Col>
                    </Row>
            </Container>
        )
    }
}

class VoteSplitChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            series: [{
                name: 'Democratic Votes',
                data: [153]
              }, {
                name: 'Republican Votes',
                data: [634]
              }],
            options: {
            chart: {
                type: 'bar',
                stacked: true,
                stackType: '100%'
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              stroke: {
                width: 1,
                colors: ['#fff']
              },
              title: {
                text: 'Vote Share Division',
                align: 'center',
                margin: 0,
              },
              xaxis: {
                categories: ["Vote Split"],
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return val + " votes"
                  }
                }
              },
              fill: {
                opacity: 1,
                colors: ["#00AEF3", "#DE0100"]
              },
              legend:{
                show:false
              }
            }
        }
    }
    componentDidMount(){
        api.getVoteShare(this.props.stateName)
            .then((response)=> {
                let data = response.data;
                this.setState({series: [{
                    name: 'Democratic Votes',
                    data: [data.democrateVotesVotes]
                  }, {
                    name: 'Republican Votes',
                    data: [data.republicanVotes]
                  }]})
            })
    }
    render(){
        return(
        <>
            <div>
                <Chart options={this.state.options} series={this.state.series} type="bar" height={200}/>
            </div>
        </>);
    }
}


class VoteSplitChartMini extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            series: [{
                name: 'Democratic Votes',
                data: [3]
              }, {
                name: 'Republican Votes',
                data: [3]
              }],
            options: {
            chart: {
                type: 'bar',
                stacked: true,
                stackType: '100%'
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              stroke: {
                width: 1,
                colors: ['#fff']
              },
              title: {
                text: 'Vote Share Division',
                align: 'center',
                margin: 0,
              },
              xaxis: {
                categories: ["Vote Split"],
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return val + " votes"
                  }
                }
              },
              fill: {
                opacity: 1,
                colors: ["#00AEF3", "#DE0100"]
              },
              legend:{
                show:false
              }
            }
        }
    }
    render(){
        return(
        <>
            <div>
                <Chart options={this.state.options} series={[{
                name: 'Democratic Votes',
                data: [this.props.democratVotes]
              }, {
                name: 'Republican Votes',
                data: [this.props.republicanVotes]
              }]} type="bar" height={150}/>
            </div>
        </>);
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
            let demographicsArray = [ demographics.democratPopulation, demographics.republicanPopulation, demographics.whitePopulation, demographics.blackPopulation, demographics.hispanicPopulation, demographics.asianPopulation, demographics.nativeAmericanPopulation];
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