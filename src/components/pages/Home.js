import React from 'react';
import { Row,Container,Button, Card, Col} from 'react-bootstrap';


function About() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Row className="background-image">
          <Col className="justify">
          <h1>Leading Precision medicine in the world</h1>
          <p className="small">We want to improve the inclusion of African populations in global genomics research that can power drug discovery, disease diagnosis and better treatment</p>
          <Button variant="success">Call to action</Button>
          </Col>
          <Col></Col>
        </Row>
     </Container>
      </header>
      <header>
      <Row>
        <Card className="text-center shadow mx-auto">
          <Card.Body>
            <Card.Text  className="box">
            <p>We are a fast-growing global genomics company on a mission to improve the inclusion of African populations in genomics research and advance the quality of global healthcare. </p>
            </Card.Text>
          </Card.Body>
        </Card>
        </Row>
      </header>
   
        <Row className="">
          <Col className="vision">
          <div className="vision-text">
          <h4>Our Vision</h4>
          <p className="vision-text-small">Currently, there is less than 5% of African genetic material used in pharmaceutical research across the global genomics market despite the fact that Africans and people of African ancestry are more genetically diverse than all other world population 
          combined.
          </p>

          <p className="vision-text-small">This means that pharmaceutical research and development is lacking the diverse data that may hold the key to medical discoveries and new healthcare solutions. This is where we come in.
          </p>

          </div>
          </Col>
          <Col className="zarah"></Col>
        </Row>

        <Row className="about">
          <Col className="">
          <div className="">
          <h1 className="quote"><span style={{ fontSize: "100px"}}>"</span> We have set out to build the world's largest Pan-African Biobank</h1>
          <p>Learn more about our research</p>
          </div>
          </Col>
          <Col>
          <div className="build-up">
          <Row>
          <Col className="build-center"><div className="Ellipse"></div>Lorem Ipsum </Col>
          <Col className="build-center"><div className="Ellipse"></div>Lorem Ipsum </Col>
          <Col className="build-center"><div className="Ellipse"></div>Lorem Ipsum </Col>
          </Row>

          </div>
          <div className="build">We have set out to build the world’s largest Pan-African biobank by collaborating with health and research institutions in African countries. 

          These collaborations support both diagnostic and therapeutic insights which could increase responsiveness of Africans to health products as well as: discovery, diagnosis and treatment that can prove beneficial to the health of all populations. </div>
          </Col>
        </Row>
    </div>
    
  );
}

export default About;
