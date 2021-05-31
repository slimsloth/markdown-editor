import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="fixed-bottom d-flex justify-content-center align-items-center" id="container-footer">
            <p className="text-light text-center font-weight-light">Created by Sean Mitchell</p>
        </Container>
    )
}

export default Footer;
