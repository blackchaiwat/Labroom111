import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import Formstep1 from './Formstep1';
import Formstep2 from './Formstep2';
import Formstep3 from './Formstep3';
import Formstep4 from './Formstep4';
import Breadcrumbs from '../../../../layout/Breadcrumb'

const FormWizard = () => {
    const [steps, setSteps] = useState(1)
    const [formdata, setFormdata] = useState({});
    return (
        <Fragment>
            <Breadcrumbs parent="Home" subparent="Forms / Form Widgets" title="Form Wizard 1" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Form Wizard With Icon</h5>
                                <span>{'Please Make sure fill all the filed before click on next button'}</span>
                            </CardHeader>
                            <CardBody className='form-wizard'>
                                {steps === 1 && <Formstep1 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}

                                {steps === 2 && <Formstep2 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}

                                {steps === 3 && <Formstep3 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}

                                {steps === 4 && <Formstep4 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}

                                <div className="text-center">
                                    <span className={`step ${steps > 1 ? 'finish' : ''} ${steps === 1 ? 'active' : ''}`} />
                                    <span className={`step ${steps > 2 ? 'finish' : ''} ${steps === 2 ? 'active' : ''}`} />
                                    <span className={`step ${steps > 3 ? 'finish' : ''} ${steps === 3 ? 'active' : ''}`} />
                                    <span className={`step ${steps > 4 ? 'finish' : ''} ${steps === 4 ? 'active' : ''}`} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    );
};
export default FormWizard;