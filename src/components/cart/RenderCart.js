import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React from "react";

function RenderCart() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={8}></Col>
          <Col xs={12} md={12} lg={4}></Col>
        </Row>
        <Row>
          <Col>Available payment processors</Col>
        </Row>
      </Container>
    </div>
  );
}

export default RenderCart;
