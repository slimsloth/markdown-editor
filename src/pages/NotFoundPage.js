import React from 'react';
import Container from "react-bootstrap/Container";

const NotFoundPage = () => {
    return (
        <Container>
            <div className="border page-not-found d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-1 ">404</h1>
                <p className="">Page not found!</p>
            </div>
        </Container>
    )
}

export default NotFoundPage;
