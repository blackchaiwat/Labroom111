import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DefaultFormLayoutClass from './DefaultFormLayout';
import HorizontalFormLayoutClass from './HorizontalFormLayout';
import MegaFormClass from './MegaFormClass';
import InlineFormClass from './InlineFormClass';
import Breadcrumbs from '../../../../layout/Breadcrumb';

const FormDefault = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Home" subparent="Forms / Form Layout" title="Default Forms" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12" xl="6">
                        <Row>
                            <DefaultFormLayoutClass />
                            <HorizontalFormLayoutClass />
                        </Row>
                    </Col>
                    <Col sm="12" xl="6">
                        <Row>
                            <MegaFormClass />
                            <InlineFormClass />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default FormDefault;