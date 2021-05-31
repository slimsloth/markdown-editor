import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Editor from "../components/Editor";
import Previewer from "../components/Previewer";
import Footer from '../components/Footer';

const HomePage = (props) => {

  return (
    <Container fluid="true" className="d-flex flex-column flex-grow">
      <Row noGutters="true" xs={1} sm={1} md={1} lg={2} xl={2}>
        <Col>
          <Editor handleChange={props.handleChange} editorText={props.text}/>
        </Col>
        <Col>
          <Previewer previewText={props.text}/>
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
};

export default HomePage;
