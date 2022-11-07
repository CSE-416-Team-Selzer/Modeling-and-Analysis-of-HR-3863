import React from "react";
import StatesNavbar from './StatesNavbar.js';
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
                                    Source 1 <br/>
                                    Source 2 <br/>
                                    Source 3 <br/>
                                    Source 4 <br/>
                                    Source 5 <br/>
                                    etc
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