import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Col, InputGroup, Label, Row } from 'reactstrap';
import { DateTimeText2, DisabledDaysoftheWeek, EnabledDisabledDates, ViewMode } from '../../../../constant';

const DateTime2 = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = date => {
        setStartDate(date);
    };
    return (
        <Fragment>
            <Row className="mb-3 g-3">
                <Label className="col-sm-3 col-form-label text-end">{DateTimeText2}</Label>
                <Col xl="5" sm="7" lg="8">
                    <DatePicker
                        className="form-control datetimepicker-input digits"
                        selected={startDate}
                        showTimeSelect
                        onChange={handleChange}
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </Col>
            </Row>
            <Row className="mb-3 g-3">
                <Label className="col-sm-3 col-form-label text-end">{EnabledDisabledDates}</Label>
                <Col xl="5" sm="7" lg="8">
                    <InputGroup className="date" id="dt-enab-disab-date" data-target-input="nearest">
                        <DatePicker
                            className="form-control datetimepicker-input digits"
                            selected={startDate}
                            showTimeSelect
                            onChange={(date) => setStartDate(date)}
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                        <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mb-3 g-3">
                <Label className="col-sm-3 col-form-label text-end">{ViewMode}</Label>
                <Col xl="5" sm="7" lg="8">
                    <InputGroup className="date" id="dt-view" data-target-input="nearest">
                        <DatePicker
                            className="form-control datetimepicker-input digits"
                            selected={startDate}
                            showTimeSelect
                            onChange={(date) => setStartDate(date)}
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                        <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                    </InputGroup>
                </Col>
            </Row>
            <div className="row g-3 mb-0">
                <Label className="col-sm-3 col-form-label text-end">{DisabledDaysoftheWeek}</Label>
                <Col xl="5" sm="7" lg="8">
                    <InputGroup className="date" id="dt-disab-days" data-target-input="nearest">
                        <DatePicker
                            className="form-control datetimepicker-input digits"
                            selected={startDate}
                            showTimeSelect
                            onChange={(date) => setStartDate(date)}
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                        <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                    </InputGroup>
                </Col>
            </div>
        </Fragment>
    );
};
export default DateTime2;