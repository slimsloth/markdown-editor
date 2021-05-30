import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const AboutPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/slimsloth")
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  if (loading) return <h1>Loading data...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  return (
    <Container>
      <h1 className="display-4 text-center">Real-Time Markdown Previewer</h1>
      <div className="d-flex flex-column align-items-center">
        <Image
          alt={data.login}
          src={data.avatar_url}
          roundedCircle
          className="align-self-center"
        ></Image>
        <p className="lead">
          Created by Sean Mitchell
        </p>
      </div>
      <p className="text-center font-weight-lighter">
        Simply type your markdown into the editor window. The preview window
        will automatically display your markdown in real-time.
      </p>
      <h1>Syntax Guide</h1>
      <h3>Headers</h3>
      <div className="code-example">
        <code className="text-white">
          # This is an &lt;h1&gt; tag
          <br />
          ## This is an &lt;h2&gt; tag
          <br />
          ###### This is an &lt;h6&gt; tag
          <br />
        </code>
      </div>

      <h3>Emphasis</h3>
      <div className="code-example">
        <code className="text-white">
          *This text will be italic*
          <br />
          _This will also be italic_
          <br />
          <br />
          **This text will be bold**
          <br />
          __This will also be bold__
          <br />
          _You **can** combine them_
          <br />
        </code>
      </div>
      <h3>Lists</h3>
      <h4>Unordered</h4>
      <div className="code-example">
        <code className="text-white">
          * Item 1 <br />
          * Item 2 <br />
          &emsp;* Item 2a <br />
          &emsp;* Item 2b <br />
        </code>
      </div>
      <h4>Ordered</h4>
      <div className="code-example">
        <code className="text-white">
          1. Item 1 1. Item 2 <br />
          1. Item 3 <br />
          &emsp;1. Item 3a <br />
          &emsp;1. Item 3b <br />
        </code>
      </div>
      <h3>Images</h3>
      <div className="code-example">
        <code className="text-white">
          ![GitHub Logo](/images/logo.png)
          <br /> Format: ![Alt Text](url)
        </code>
      </div>
      <h3>Links</h3>
      <div className="code-example">
        <code className="text-white">
          http://github.com - automatic! <br />
          [GitHub](http://github.com)
        </code>
      </div>
      <h3>Blockquotes</h3>
      <div className="code-example">
        <code className="text-white">
          As Kanye West said: <br />
          <br />
          &gt; We're living the future so <br />
          &gt; the present is our past.
        </code>
      </div>
      <h3>Inline code</h3>
      <div className="code-example">
        <code className="text-white">
          I think you should use an <br />
          `&lt;addr&gt;` element here instead.
        </code>
      </div>
    </Container>
  );
};

export default AboutPage;
