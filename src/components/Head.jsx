import React from 'react';
import Container from "react-bootstrap/Container";
import {ImPencil2} from "react-icons/im";
import {ImEye} from "react-icons/im";

const Head = (props) => {
    let icon = props.title === 'Editor' ? <ImPencil2 className="mr-2 ml-2"/> : <ImEye className="mr-2 ml-2"/>
    return (
        <Container fluid="true" className="head text-white">
            {icon}
            {props.title}

        </Container>
    )
}

export default Head;
