import React, { Fragment } from "react";
import BreadCrumb from "../../layout/Breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Media,
} from "reactstrap";
import {
  BothSideScroll,
  NoScrollbar,
  HorizontalScroll,
  VerticalScroll
} from "../../constant";
import ScrollBar from "react-perfect-scrollbar";
const Scrollings = () => {
  return (
    <Fragment>
      <BreadCrumb parent="Home" subparent="Advance" title="Scrollable" />
      <Container fluid={true}>
        <Row>
          <Col sm="6">
            <Card>
              <CardHeader>
                <h5>{BothSideScroll}</h5>
              </CardHeader>
              <CardBody>
                 <ScrollBar style={{height:"460px"}}>
                  <Media
                    src={require("../../assets/images/banner/2.jpg")}
                    alt="banner"
                    height={600}
                  />
                </ScrollBar> 
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader>
                <h5>{HorizontalScroll}</h5>
              </CardHeader>
              <CardBody>
                 <ScrollBar option={{ suppressScrollY: true }} style={{height:"460px"}}>
              <div className="horz-scroll-content">
                <Row>
                  <Col sm="3">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </Col>
                  <Col sm="3">
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Col>
                  <Col sm="3">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Col>
                  <Col sm="3">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Col>
                </Row>
              </div>
                </ScrollBar> 
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader>
                <h5>{NoScrollbar}</h5>
              </CardHeader>
              <CardBody>
                 <ScrollBar className="vertical-scroll"
                options={{ suppressScrollX: true, suppressScrollY: true }}
              >
              <div>
                <Media src={require("../../assets/images/banner/1.jpg")} alt="" height="480" />
              </div>
            </ScrollBar> 
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader>
                <h5>{VerticalScroll}</h5>
              </CardHeader>
              <CardBody>
                 <ScrollBar  options={{ suppressScrollY: true }} style={{height:"460px"}}>
              <div className="horz-scroll-content">
                <Row>
                  <Col sm="3">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </Col>
                  <Col sm="3">
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Col>
                  <Col sm="3">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Col>
                  <Col sm="3">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Col>
                </Row>
              </div>
                </ScrollBar> 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Scrollings;
