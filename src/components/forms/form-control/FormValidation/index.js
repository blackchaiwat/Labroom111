import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import CustomStylesClass from './CustomStyles';
import BrowserDefaultsClass from './BrowserDefaults';
import SupportedElementsClass from './SupportedElements';
import Breadcrumbs from '../../../../layout/Breadcrumb';
import { Tooltips, Tooltiptext, Tooltiptext2, Tooltiptext3, classesfor, feedbackd, positionrelative, tooltipd } from '../../../../constant';
import TooltipForm from '../TooltipForm';

const FormValidation = () => {

    return (
        <Fragment>
            <Breadcrumbs parent="Home" subparent="Form" title="Validation" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <CustomStylesClass />
                        <BrowserDefaultsClass />
                        <SupportedElementsClass />
                        <Card>
                            <CardHeader>
                                <h5>{Tooltips}</h5>
                                <span>{Tooltiptext} <code className="text-danger">{feedbackd}</code> {classesfor} <code className="text-danger">{tooltipd}</code> {Tooltiptext2} <code className="text-danger">{positionrelative}</code> {Tooltiptext3}</span>
                            </CardHeader>
                            <CardBody>
                                <TooltipForm />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default FormValidation;