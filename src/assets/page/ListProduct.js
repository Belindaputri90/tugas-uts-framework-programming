import React from "react";
import { Container, Card, Button } from "react-bootstrap";
function ListProduct() {
  return (
    <Container className="mt-5">
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>List Product</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ListProduct;
