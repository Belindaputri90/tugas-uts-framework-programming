import { React, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

export default function FormPemesanan() {
  const [name, setName] = useState("");
  const [jumlah, setjumlah] = useState("");
  const [size, setsize] = useState("");
  const [product, setproduct] = useState("");
  const [inputs, setInputs] = useState("");
  const [total, settotal] = useState("");
  const [bayar, setbayar] = useState("");
  const [sisa, setsisa] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const changeSize = (newSize) => {
    setsize(newSize);
  };

  const changeProduct = (newProduct) => {
    setproduct(newProduct);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let harga;
    if (jumlah >= 2) {
      let sub = 150000 * parseInt(inputs.jumlah);
      let diskon = 0.1 * sub;
      harga = sub - diskon;
    } else {
      let sub = 150000 * parseInt(inputs.jumlah);
      let diskon = 0.0 * sub;
      harga = sub - diskon;
    }
    settotal(harga);
    setjumlah(inputs.jumlah);
    setName(inputs.nama);
    // setsize(size);
    setbayar(inputs.bayar);
    let sisa = parseInt(inputs.bayar) - harga;
    setsisa(sisa);
  };

  return (
    <>
      <Container className="form-pemesanan" style={{ marginBottom: "100px", marginTop: "10%" }}>
        <Row>
          <Form onSubmit={handleSubmit}>
            <h3
              className="mb-5 text-capitalize mt-sm-10"
              style={{ color: "#9E7676" }}
            >
              Fill your order here
            </h3>
            <Form.Group className="form-grup mb-3" controlId="formBasicEmail">
              <Form.Label className="font-label">Input Your Name</Form.Label>
              <Form.Control type="text" name="nama" onChange={handleChange} />
              <Form.Text className="text-muted">
                Make sure your name is correct
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="font-label">Choose the Product</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => changeProduct(event.target.value)}
                value={product}
              >
                <option>Select Your Clothes</option>
                <option value="Le Mans Blouse Khaki">
                  Le Mans Blouse Khaki
                </option>
                <option value="Cassie Dress">Cassie Dress</option>
                <option value="Forte Top Shirt">Forte Top Shirt</option>
                <option value="Lua Jibbling Pants">Lua Jibbling Pants</option>
                <option value="Rence Beige Dress">Rence Beige Dress</option>
                <option value="Leylin Dress">Leylin Dress</option>
                <option value="Blair Belt Bustier">Blair Belt Bustier</option>
                <option value="Peony Black Dress">Peony Black Dress</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="font-label">
                Input Your Clothes Size
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => changeSize(event.target.value)}
                value={size}
              >
                <option>Select Your Size</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="font-label">Quantity Amount</Form.Label>
              <Form.Control
                type="number"
                name="jumlah"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Get Disc 10% If your quantity more than 1 product
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="font-label">Pay</Form.Label>
              <Form.Control
                type="number"
                name="bayar"
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              className="btn-order d-grid gap-2 col-12 mx-auto text-uppercase mb-5"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Row>

        <Container className="result">
          <Row>
            <Col lg={6} xs={6} className="result-text ml-2">
              Your Name
            </Col>
            <Col lg={6} xs={6}>
              {name}
            </Col>
          </Row>

          <Row>
            <Col lg={6} xs={6} className="result-text ml-2">
              Product
            </Col>
            <Col lg={6} xs={6}>
              {product}
            </Col>
          </Row>

          <Row>
            <Col lg={6} xs={6} className="result-text ml-2">
              Size
            </Col>
            <Col lg={6} xs={6}>
              {size}
            </Col>
          </Row>

          <Row>
            <Col lg={6} xs={6} className="result-text ml-2">
              Quantity Product
            </Col>
            <Col lg={6} xs={6}>
              {jumlah}
            </Col>
          </Row>

          <Row>
            <Col lg={6} xs={6} className="result-text ml-2">
              Total
            </Col>
            <Col lg={6} xs={6}>
              {total}
            </Col>
          </Row>

          <hr />

          <Row>
            <Col lg={6} xs={6} className="result-text ml-2 fw-bold">
              Pay
            </Col>
            <Col lg={6} xs={6}>
              {bayar}
            </Col>
          </Row>

          <Row>
            <Col lg={6} xs={6} className="result-text ml-2 fw-bold">
              Change
            </Col>
            <Col lg={6} xs={6}>
              {sisa}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
