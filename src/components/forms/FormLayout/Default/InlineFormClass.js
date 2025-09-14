import React, { Fragment } from "react";
import { Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { InlineForm, InlineFormWithLabel, InlineFormWithoutLabel, InlineFormspan, Login, Password, Username, forminline } from "../../../../constant";

const InlineFormClass = () => {
    return (
        <Fragment>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <h5>{InlineForm}</h5>
                        <span>{'Use'}<code>{forminline}</code>{InlineFormspan}</span>
                    </CardHeader>
                    <CardBody>
                        <h6>{InlineFormWithLabel}</h6>
                        <Form className="row theme-form mt-3">
                            <Col xxl='4' className="mb-3 d-flex">
                                <Label className="col-form-label pe-2">{Username}</Label>
                                <Input className="form-control" type="text" name="inputUsername" placeholder="Username" autoComplete="off" />
                            </Col>
                            <Col xxl='4' className="mb-3 d-flex">
                                <Label className="col-form-label pe-2">{Password}</Label>
                                <Input className="form-control" type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
                            </Col>
                            <Col xxl='4' className="mb-3 d-flex">
                                <Button color="primary"  >{Login}</Button>
                            </Col>
                        </Form>
                        <h6>{InlineFormWithoutLabel}</h6>
                        <Form className="row row-cols-sm-3 theme-form mt-3 form-bottom">
                            <FormGroup>
                                <Input className="form-control" type="text" name="inputUnlabelUsername" placeholder="Username" autoComplete="off" />
                            </FormGroup>
                            <FormGroup>
                                <Input className="form-control" type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
                            </FormGroup>
                            <FormGroup>
                                <Button color="secondary" >{Login}</Button>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default InlineFormClass