import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/styles.css";

const Footer = () => {
  return (
    <Container
      fluid
      className="footer align-bottom mt-5" >
      <Row>
        <Col lg={6} className="footer-left text-center">
          <h2 className="fw-bold">La Belle Blanc</h2>
          <p>
            000-0000-0000 <br />
            CONTACT.labelle_blanc@naver.com
          </p>
        </Col>

        {/* <Col lg={4}>
          <h2>Created by Belinda Putri</h2>
        </Col> */}

        <Col lg={6} className="footer-left text-center mt-4">
          <p>
            COMPANY.OWNER.Nae hwa kang BUSINESS <br />
            NUMBER.8788802132 MAIL-ORDER LICENSE.2021-1785 <br />
            ADDRESS. 167, Jongam-ro, Seongbuk-gu, Seoul, <br />
            Republic of Korea Copyright ©La Belle Blanc All rights reserved.{" "}
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
