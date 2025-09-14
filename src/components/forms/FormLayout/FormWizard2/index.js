import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../layout/Breadcrumb'
import Formstep1 from './Formstep1';
import Formstep2 from './Formstep2';
import Formstep3 from './Formstep3';
import Formstep4 from './Formstep4';

const Formwizard2 = () => {
    const [steps, setSteps] = useState(1);
    const [formdata, setFormdata] = useState({});
    return (
        <Fragment>
            <Breadcrumbs parent="Home" subparent="Forms" title="Form Wizard-2" />
            <Container fluid={true}>
                <Row>
                    <Col sm='12'>
                        <Card>
                            <CardHeader>
                                <h5>{'Form Wizard And Validation'}</h5>
                                <span>{'Validation Step Form Wizard'}</span>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <div className="stepwizard">
                                        <div className="stepwizard-row setup-panel">
                                            <div className="stepwizard-step">
                                                <Button color={`${steps === 1 ? 'primary' : 'light'}`} onClick={() => { setSteps(1) }}>1</Button>
                                                <p>{'Step1'}</p>
                                            </div>
                                            <div className="stepwizard-step">
                                                <Button color={`${steps === 2 ? 'primary' : 'light'}`} onClick={() => { setSteps(2) }}>2</Button>
                                                <p>{'Step2'}</p>
                                            </div>
                                            <div className="stepwizard-step">
                                                <Button color={`${steps === 3 ? 'primary' : 'light'}`} onClick={() => { setSteps(3) }}>3</Button>
                                                <p>{'Step3'}</p>
                                            </div>
                                            <div className="stepwizard-step">
                                                <Button color={`${steps === 4 ? 'primary' : 'light'}`} onClick={() => { setSteps(4) }}>4</Button>
                                                <p>{'Step4'}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {steps === 1 && <Formstep1 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}
                                    {steps === 2 && <Formstep2 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}
                                    {steps === 3 && <Formstep3 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}
                                    {steps === 4 && <Formstep4 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Formwizard2