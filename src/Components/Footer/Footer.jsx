import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white" style={{ height: "30vh" }}>
      <Container>
        <Row className="fs-4">
          <Col xs={12} sm={4} className="text-center">
            <p>&copy; 2023 Movie Website STREAMIT. All rights reserved.</p>
          </Col>
          <Col xs={12} sm={4} className="text-sm-right">
            <p>Designed by Ankit Bankar.</p>
            <p style={{ cursor: "pointer" }}>Contact- bankarankit3@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
