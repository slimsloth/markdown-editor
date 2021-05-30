import React, { useState, useEffect } from "react";
import marked from "marked";
import dompurify from "dompurify";
import Container from "react-bootstrap/Container";
import Head from "./Head";

const Previewer = (props) => {
  const [previewText, setPreviewText] = useState("");

  useEffect(() => {
    setPreviewText(marked(dompurify.sanitize(props.previewText)));
  }, [props.previewText]);

  function createMarkup() {
    return { __html: previewText };
  }

  return (
    <div id="previewer">
      <Head title="Previewer" id="previewer" />
        <Container
          className="text-white form-control overflow-auto"
          id="form-previewer"
          dangerouslySetInnerHTML={createMarkup()}
          fluid
        />
    </div>
  );
};

export default Previewer;
