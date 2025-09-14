import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Col, Form, InputGroup, Label, Row } from 'reactstrap';
import { DateOnly, MinimumSetup, TimeOnly, UsingLocales } from '../../../../constant';
import DateTime2 from './DateTime2';

const DateTimeForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = date => {
        setStartDate(date);
    };
    return (
        <Fragment>
            <Form className="theme-form">
                <Row className="mb-3 g-3">
                    <Label className="col-sm-3 col-form-label text-end">{MinimumSetup}</Label>
                    <Col xl="5" sm="7" lg="8">
                        <InputGroup className="date" id="dt-minimum" data-target-input="nearest">
                            <DatePicker
                                className="form-control digits"
                                selected={startDate}
                                showTimeSelect
                                onChange={handleChange}
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />
                            <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mb-3 g-3">
                    <Label className="col-sm-3 col-form-label text-end">{UsingLocales}</Label>
                    <Col xl="5" sm="7" lg="8">
                        <InputGroup className="date" id="dt-minimum" data-target-input="nearest">
                            <DatePicker
                                className="form-control datetimepicker-input digits"
                                selected={startDate}
                                showTimeSelect
                                onChange={handleChange}
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />
                            <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mb-3 g-3">
                    <Label className="col-sm-3 col-form-label text-end">{TimeOnly}</Label>
                    <Col xl="5" sm="7" lg="8">
                        <InputGroup className="date" id="dt-minimum" data-target-input="nearest">
                            <DatePicker
                                className="form-control datetimepicker-input digits"
                                selected={startDate}
                                onChange={handleChange}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            />
                            <div className="input-group-text"><i className="fa fa-clock-o"></i></div>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mb-3 g-3">
                    <Label className="col-sm-3 col-form-label text-end">{DateOnly}</Label>
                    <Col xl="5" sm="7" lg="8">
                        <InputGroup className="date" id="dt-minimum" data-target-input="nearest">
                            <DatePicker
                                className="form-control datetimepicker-input digits"
                                selected={startDate}
                                onChange={handleChange}
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />
                            <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                        </InputGroup>
                    </Col>
                </Row>
                <DateTime2 />
            </Form>

        </Fragment>
    );
};
export default DateTimeForm;