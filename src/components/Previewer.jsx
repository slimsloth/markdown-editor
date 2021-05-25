import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Head from "./Head";

const Previewer = (props) => {
  const [previewText, setPreviewText] = useState("");

  useEffect(() => {
    setPreviewText(props.previewText);
  }, [props.previewText]);

  return (
    <div id="previewer">
      <Head title="Previewer" id="previewer" />
      <Form>
        <Form.Control
          as="textarea"
          id="form-editor"
          className="text-white"
          readOnly={true}
          defaultValue={previewText}
        ></Form.Control>
      </Form>
    </div>
  );
};

export default Previewer;
