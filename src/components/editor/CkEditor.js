import React, { Fragment } from "react";
import BreadCrumb from "../../layout/Breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { CKEditorExample } from "../../constant";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const CkEditor = () => {

  return (
    <Fragment>
      <BreadCrumb parent="Home" subparent="Editors" title="Ck Editor" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{CKEditorExample}</h5>
              </CardHeader>
              <CardBody>
                <CKEditor
                  editor={ClassicEditor}
                  data={"Hello!, This is content."}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CkEditor;
