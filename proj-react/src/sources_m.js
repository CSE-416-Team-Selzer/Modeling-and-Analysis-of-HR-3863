import React from "react";
import StatesNavbar from './states_navbar.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class SourcesPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        
        }
    }
    render(){
        return(
            <div style={{width:"100%"}}>
                <StatesNavbar stateSelect={false}/>
                <div>
                    <Container fluid className="text-left">
                        <Row>
                            <Col>
                                <h3>Sources Used:</h3>
                                <p>
                                    House of Representatives Voting Data:<br/>
                                    <a href="https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.2020.html#list-tab-BG8ZITUQ783GX73G14">MIT Election Data and Science Lab, 2022, "U.S. House of Representatives Precinct-Level Returns 2020"</a><br/>
                                    Boundary Data: <br/>
                                    <a href="https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.2020.html#list-tab-BG8ZITUQ783GX73G14">US Census Bureau Tiger/Line Shapefiles</a><br/>
                                    Racial Demographics Data: <br/>
                                    <a href="https://data.census.gov/table?q=race&y=2020">U.S. Census Bureau 2020. P2: HISPANIC OR LATINO, AND NOT HISPANIC OR LATINO BY RACE.</a><br/>
                                    Arizona Current Districting: <br/>
                                    <a href="https://redistricting-irc-az.hub.arcgis.com/pages/official-maps">Arizona Independent Redistricting Commission, Approved Official Congressional Map</a><br/>
                                    Texas Current Districting: <br/>
                                    <a href="https://redistricting.capitol.texas.gov/Current-districts">Texas Legislative Council</a><br/>
                                    Utah Current Districting:<br/>
                                    <a href="https://citygate.utleg.gov/legdistricting/utah/comment_links">Utah Legislative Redistricting Committee</a><br/>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default SourcesPage