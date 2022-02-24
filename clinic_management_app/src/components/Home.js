import NavBar from "../components/Navbar";
import { Col, Row, Container } from "@kunukn/react-bootstrap-grid";
import '../styles/Table.css';

// const ReactStyle = () => (

// );

const Home = () => {
  return (
    <div>
      {/* <Container>
        <Row>
          <Col sm>One of three columns</Col>
          <Col sm>One of three columns</Col>
          <Col sm>One of three columns</Col>
        </Row>
      </Container>
      

    <div class="container">
    <div class="row">
      <div class="col-sm">One of three columns</div>
      <div class="col-sm">One of three columns</div>
      <div class="col-sm">One of three columns</div>
    </div>
  </div> */}
  <NavBar />
      <h1 style={{ textAlign: "center" }}>
        WELCOME TO THE CLINIC MANAGEMENT SYSTEM
      </h1>
    </div>
  );
};

export default Home;
