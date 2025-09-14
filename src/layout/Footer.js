import { Row, Col, Container} from 'reactstrap'

const Footer = () => {
    return (
        <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md="6" className="footer-copyright">
              <p className="mb-0">{"Copyright 2025 © All rights reserved."}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}

export default Footer
