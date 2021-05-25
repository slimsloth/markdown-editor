import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Editor from "../components/Editor";
import Previewer from "../components/Previewer";

const HomePage = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Container fluid="true">
      <Row noGutters="true" xs={1} sm={1} md={1} lg={2} xl={2}>
        <Col>
          <Editor handleChange={handleChange}/>
        </Col>
        <Col>
          <Previewer previewText={text}/>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
