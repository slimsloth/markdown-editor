import React from "react";
import Form from "react-bootstrap/Form";
import Head from "./Head";

const Editor = (props) => {

  return (
    <div id="editor">
      <Head title="Editor"/>
      <Form className="d-flex flex-column">
        <Form.Control
          as="textarea"
          id="form-editor"
          className="text-white"
          onChange={(e)=>props.handleChange(e)}
          value={props.editorText}
        ></Form.Control>
      </Form>
    </div>
  );
};

export default Editor;
