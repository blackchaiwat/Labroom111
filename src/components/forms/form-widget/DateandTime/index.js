import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../../layout/Breadcrumb';
import DateTimeForm from './DateTimeForm';

const DateTimeContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Home" subparent="Forms / Form Widgets" title="Date Time Picker" />
      <Container fluid={true}>
        <Card>
          <CardHeader>
            <h3>Date Time Picker</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="12">
                <div className="datetime-picker">
                  <DateTimeForm />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};
export default DateTimeContain;