import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Editor from "../components/Editor";
import Previewer from "../components/Previewer";

const HomePage = () => {
  return (
    <Container fluid="true">
      <Row noGutters="true">
        <Col>
          <Editor />
        </Col>
        <Col>
        <Previewer/>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
