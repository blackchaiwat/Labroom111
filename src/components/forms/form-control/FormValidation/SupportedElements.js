import React, { Fragment } from "react";
import { Card, CardBody, Form, FormGroup, Label, Input, CardHeader } from 'reactstrap'
import { Checkthebox, InvalidFeedback, InvalidSelect, InvalidcustomFiles, More, One, SelectDefault, SupportText, SupportText2, SupportedElements, TextAreaerror, Textarea, Three, ToggleRadio, ToggleRadioerror, Two } from "../../../../constant";

const SupportedElementsClass = () => {
    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <h5>{SupportedElements}</h5>
                    <span>{SupportText}</span>
                    <span>{SupportText2}</span>
                </CardHeader>
                <CardBody>
                    <Form className="was-validated">
                        <div className="mb-3">
                            <Label className="form-label" for="validationTextarea">{Textarea}</Label>
                            <Input type="textarea" className="form-control" id="validationTextarea" placeholder="Required example textarea" required></Input>
                            <div className="invalid-feedback">{TextAreaerror}</div>
                        </div>
                        <div className="form-check mb-3">
                            <Input className="custom-control-input" id="customControlValidation1" type="checkbox" required />
                            <Label className="custom-control-label" htmlFor="customControlValidation1">{Checkthebox}</Label>
                            <div className="invalid-feedback">{InvalidFeedback}</div>
                        </div>
                        <div className="form-check">
                            <Input className="custom-control-input" id="customControlValidation2" type="radio" name="radio-stacked" required />
                            <Label className="custom-control-label" htmlFor="customControlValidation2">{ToggleRadio}</Label>
                        </div>
                        <div className="form-check mb-3">
                            <Input className="custom-control-input" id="customControlValidation3" type="radio" name="radio-stacked" required />
                            <Label className="custom-control-label" htmlFor="customControlValidation3">{ToggleRadioerror}</Label>
                            <div className="invalid-feedback">{More} {InvalidFeedback}</div>
                        </div>
                        <FormGroup className="mb-3">
                            <select className="form-select" type="select" required>
                                <option value=''>{SelectDefault}</option>
                                <option value="1">{One}</option>
                                <option value="2">{Two}</option>
                                <option value="3">{Three}</option>
                            </select>
                            <div className="invalid-feedback">{InvalidSelect}</div>
                        </FormGroup>
                        <div className="custom-file">
                            <Input className="custom-file-input form-control" id="validatedCustomFile" type="file" required />
                            <div className="invalid-feedback">{InvalidcustomFiles}</div>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default SupportedElementsClass;