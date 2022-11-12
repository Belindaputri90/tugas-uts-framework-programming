import { Container, Card, Button, Row, Col } from "react-bootstrap";
import product1 from "../../assets/img/product/LeMansBlouse.jpg";
import product2 from "../../assets/img/product/CassieDress.jpg";
import product3 from "../../assets/img/product/ForteTopDress.jpg";
import product4 from "../../assets/img/product/LuaJibblingPants.jpg";
import product5 from "../../assets/img/product/RenceBeigeDress.jpg";
import product6 from "../../assets/img/product/LeylinDress.jpg";
import product7 from "../../assets/img/product/BlairBeltBustier.jpg";
import product8 from "../../assets/img/product/PeonyBlackDress.jpg";

function Product() {
  return (
    <Container className="mt-5">
      <Row className="konten-product">
        <Col lg={3} sm={12} className="product mb-5">
          <Card className="card rounded-0" style={{ lineHeight: "10px" }}>
            <Card.Img className="rounded-0" variant="top" src={product1} />
            <Card.Body className="card-body">
              <Card.Title className="card-title">
                Le Mans Blouse Khaki
              </Card.Title>
              <Card.Text className="card-text">IDR. 150.000</Card.Text>
              <Button
                className="btn-order d-grid gap-2 col-12 mx-auto text-uppercase"
                href="./FormPemesanan"
              >
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12} className="mb-5">
          <Card className="card rounded-0" style={{ lineHeight: "10px" }}>
            <Card.Img className="rounded-0" variant="top" src={product2} />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Cassie Dress</Card.Title>
              <Card.Text className="card-text">IDR. 150.000</Card.Text>
              <Button
                className="btn-order d-grid gap-2 col-12 mx-auto text-uppercase"
                href="./FormPemesanan"
              >
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12} className="mb-5">
          <Card className="card rounded-0" style={{ lineHeight: "10px" }}>
            <Card.Img className="rounded-0" variant="top" src={product3} />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Forte Top Shirt</Card.Title>
              <Card.Text className="card-text">IDR. 150.000</Card.Text>
              <Button
                className="btn-order d-grid gap-2 col-12 mx-auto text-uppercase"
                href="./FormPemesanan"
              >
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12} className="mb-5">
          <Card className="card rounded-0" style={{ lineHeight: "10px" }}>
            <Card.Img className="rounded-0" variant="top" src={product4} />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Lua Jibbling Pants</Card.Title>
              <Card.Text className="card-text">IDR. 150.000</Card.Text>
              <Button
                className="btn-order d-grid gap-2 col-12 mx-auto text-uppercase"
                href="./FormPemesanan"
              >
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* end row 1 */}

      <Row>
        <Col lg={3} sm={12} className="mb-5">
          <Card className="card rounded-0" style={{ lineHeight: "10px" }}>
            <Card.Img className="rounded-0" variant="top" src={product5} />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Rence Beige Dress</Card.Title>
              <Card.Text className="card-text">IDR. 150.000</Card.Text>
              <Button
                className="btn-order d-grid gap-2 col-12 mx-auto text-uppercase"
                href="./FormPemesanan"
              >
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12} className="mb-5">
          <Card className="card rounded-0" style={{ lineHeight: "10px" }}>
            <Card.Img className="rounded-0" variant="top" src={product6} />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Leylin Dress</Card.Title>
              <Card.Text className="card-text">IDR. 150.000</Card.Text>
              <Button
                className="btn-order d-grid gap-2 col-12 mx-auto text-uppercase"
                href="./FormPemesanan"
              >
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12} className="mb-5">
          <Card className="card rounded-0" style={{ lineHeight: "10px" }}>
            <Card.Img className="rounded-0" variant="top" src={product7} />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Blair Belt Bustier</Card.Title>
              <Card.Text className="card-text">IDR. 150.000</Card.Text>
              <Button
                className="btn-order d-grid gap-2 col-12 mx-auto text-uppercase"
                href="./FormPemesanan"
              >
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12} className="mb-5">
          <Card className="card rounded-0" style={{ lineHeight: "10px" }}>
            <Card.Img className="rounded-0" variant="top" src={product8} />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Peony Black Dress</Card.Title>
              <Card.Text className="card-text">IDR. 150.000</Card.Text>
              <Button
                className="btn-order d-grid gap-2 col-12 mx-auto text-uppercase"
                href="./FormPemesanan"
              >
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
