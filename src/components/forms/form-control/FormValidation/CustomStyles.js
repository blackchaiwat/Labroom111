import React, { Fragment } from "react";
import { Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, InputGroup, InputGroupText, Row, Button } from 'reactstrap'
import { useForm } from 'react-hook-form';
import { Choose, CityError, CustomStyles, CustomstyleText, CustomstyleText2, CustomstyleText3, CustomstyleText4, CustomstyleText5, FirstName, FirstNameError, LastName, LastNameError, State, StateError, SubmitForm, TermsText, Username, UsernameError, Zip, ZipError, and, form, novalidate, valid } from "../../../../constant";
import { invalid } from "moment";

const CustomStylesClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data !== '') {
            alert('You submitted the form and stuff!');
        } else {
            errors.showMessages();
        }
    };
    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <h5>{CustomStyles}</h5>
                    <span>{CustomstyleText} <code className="text-danger">{novalidate}</code> {CustomstyleText2} <code className="text-danger">&lt;{form}&gt;</code>{CustomstyleText3}</span><span>{CustomstyleText4} <code className="text-danger">{invalid} </code> {and} <code className="text-danger">{valid} </code> {CustomstyleText5}</span>
                </CardHeader>
                <CardBody>
                    <Form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                        <Row className="g-3">
                            <Col md='4'>
                                <Label className="form-label" for="validationCustom01">{FirstName}</Label>
                                <input className="form-control" id="validationCustom01" type="text" defaultValue='Mark' {...register('firstname', { required: true })} />
                                <span className="text-danger">{errors.firstname && FirstNameError}</span>
                            </Col>
                            <Col md='4' >
                                <Label className="form-label" for="validationCustom02">{LastName}</Label>
                                <input className="form-control" id="validationCustom02" type="text" defaultValue='Otto' {...register('lastname', { required: true })} />
                                <span className="text-danger">{errors.lastname && LastNameError}</span>
                            </Col>
                            <Col md="4 mb-3">
                                <Label htmlFor="validationCustomUsername">{Username}</Label>
                                <InputGroup>
                                    <InputGroupText className="w-auto">{"@"}</InputGroupText>
                                    <input className="form-control" name="userName" type="text" placeholder="Username" {...register('username', { required: true })} />
                                </InputGroup>
                                <span className="text-danger">{errors.username && UsernameError}</span>
                            </Col>
                        </Row>
                        <Row className="g-3">
                            <Col md='6'>
                                <Label className="form-label" for="validationCustom03">City</Label>
                                <input className="form-control" id="validationCustom03" type="text" placeholder="City" {...register('city', { required: true })} />
                                <span className="text-danger">{errors.city && CityError}</span>
                            </Col>
                            <Col md='3'>
                                <Label className="form-label" for="validationCustom04">{State}</Label>
                                <select className="form-select" id="validationCustom04" {...register('state', { required: true })}>
                                    <option value="">{Choose}</option>
                                    <option value='...'>...</option>
                                </select>
                                <span className="text-danger">{errors.state && StateError}</span>
                            </Col>
                            <Col md='3' className="mb-3">
                                <Label className="form-label" for="validationCustom05">{Zip}</Label>
                                <input className="form-control" id="validationCustom05" type="text" placeholder="Zip" {...register('Zip', { required: true })} />
                                <span className="text-danger">{errors.Zip && ZipError}</span>
                            </Col>
                        </Row>
                        <FormGroup>
                            <div className="form-check">
                                <div className="checkbox p-0">
                                    <Input className="form-check-input" id="invalidCheck" type="checkbox" />
                                    <Label className="form-check-label" htmlFor="invalidCheck">{TermsText}</Label>
                                </div>
                            </div>
                        </FormGroup>
                        <Button color="primary">{SubmitForm}</Button>
                    </Form>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default CustomStylesClass;