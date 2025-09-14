import React, { Fragment } from 'react';
import { Col, Card, CardBody, Form, FormGroup, Label, Input, CardHeader, CardFooter, Button } from 'reactstrap';
import { AccountInformation, BillingInformation, Cancel, CompanyInformation, CompanyName, ContactNumber, EmailAddress, MegaForm, Submit, Website, YourName } from '../../../../constant';

const MegaFormClass = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <h5>{MegaForm}</h5>
                    </CardHeader>
                    <CardBody>
                        <Form className="theme-form mega-form">
                            <h6>{AccountInformation}</h6>
                            <FormGroup>
                                <Label className="col-form-label">{YourName}</Label>
                                <Input className="form-control" type="text" placeholder="your Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label className="col-form-label">{EmailAddress}</Label>
                                <Input className="form-control" type="email" placeholder="Enter email" />
                            </FormGroup>
                            <FormGroup>
                                <Label className="col-form-label">{ContactNumber}</Label>
                                <Input className="form-control" type="Number" placeholder="Enter contact number" />
                            </FormGroup>
                            <hr className="mt-4 mb-4 lightborder" />
                            <h6>{CompanyInformation}</h6>
                            <FormGroup>
                                <Label className="col-form-label">{CompanyName}</Label>
                                <Input className="form-control" type="text" placeholder="Company Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label className="col-form-label">{Website}</Label>
                                <Input className="form-control" type="text" placeholder="Website" />
                            </FormGroup>
                        </Form>
                        <hr className="mt-4 mb-4 lightborder" />
                        <h6 className='pb-3 mb-0'>{BillingInformation}</h6>
                        <Form className="row form-space theme-form">
                            <Col className='col-auto'>
                                <Input className="form-control" type="text" placeholder="Name On Card" />
                            </Col>
                            <Col className='col-auto'>
                                <Input className="form-control" type="text" name="inputPassword" placeholder="Card Number" />
                            </Col>
                            <Col className='col-auto'>
                                <Input className="form-control" type="text" name="inputPassword" placeholder="Zip Code" />
                            </Col>
                        </Form>
                    </CardBody>
                    <CardFooter className='text-end'>
                        <Button color="primary" className="m-r-15" type="submit"  >{Submit}</Button>
                        <Button color="light" type="submit" >{Cancel}</Button>
                    </CardFooter>
                </Card>
            </Col>
        </Fragment >
    );
};

export default MegaFormClass;