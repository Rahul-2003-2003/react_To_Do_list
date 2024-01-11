import { Col, Container, Row } from "react-bootstrap";
import Heading from "./parts/Heading";
import Rocket from "./parts/Rocket";
import Display from "./parts/Display";




function App() {
  return (
    <>
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={6}>

        <Heading/>
        <Rocket/>
        <Display/>
        
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
