import React from "react";
import Form from "react-bootstrap/Form";
import Head from "./Head";

const Previewer = (props) => {

  return (
    <div id="previewer">
      <Head title="Previewer" id="previewer" />
      <Form>
        <Form.Control
          as="textarea"
          id="form-editor"
          className="text-white"
          readonly="true"
          value={props.previewText}
        >
        </Form.Control>
      </Form>
    </div>
  );
};

export default Previewer;
