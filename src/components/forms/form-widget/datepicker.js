import React, { Fragment, useState } from 'react';
import BreadCrumb from '../../../layout/Breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup } from 'reactstrap'
import DatePicker from "react-datepicker";
import { DatePickers, SelectDateWithTime, CustomDateFormat, TodayButton, DisableDaysOfWeek, SpecificDateRange, MinDate, MaxDate, DateRange, InlineVersion, DisableDatepicker, SelectTimeOnly, Default } from "../../../constant";

const Datepicker = (props) => {
  const [startDate, setstartDate] = useState(new Date())
  // eslint-disable-next-line no-unused-vars
  const [endDate, setendDate] = useState(new Date())

  const handleChange = date => {
    setstartDate(date);
  };

  const addDays = date => {
    setstartDate(date, 4);
  };

  return (
    <Fragment>
      <BreadCrumb parent="Home" subparent="Forms / Form Widgets" title="Date Picker" />
      <Container fluid={true}>
        <Card>
          <CardHeader>
            <h5>{DatePickers}</h5>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="12">
                <div className="date-picker">
                  <Form className="theme-form">
                    <FormGroup className="form-row row">
                      <label className="col-sm-3 col-form-label text-end">{Default}</label>
                      <div className="col-xl-5 col-sm-9">
                        <div className="input-group">
                          <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} />
                        </div>
                      </div>
                    </FormGroup>
                    <FormGroup className="form-row row">
                      <label className="col-sm-3 col-form-label text-end">{SelectDateWithTime}</label>
                      <div className="col-xl-5 col-sm-9">
                        <DatePicker className="form-control digits" showPopperArrow={false} selected={startDate} showTimeSelect dateFormat="Pp" />
                      </div>
                    </FormGroup>
                    <FormGroup className="form-row row">
                      <label className="col-sm-3 col-form-label text-end">{SelectTimeOnly}</label>
                      <div className="col-xl-5 col-sm-9">
                        <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} showTimeSelect
                          showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                      </div>
                    </FormGroup>
                    <FormGroup className="form-row row">
                      <label className="col-sm-3 col-form-label text-end">{CustomDateFormat}</label>
                      <div className="col-xl-5 col-sm-9">
                        <DatePicker className="form-control digits" dateFormat="yyyy/MM/dd" selected={startDate} onChange={handleChange} />
                      </div>
                    </FormGroup>
                    <FormGroup className="form-row row">
                      <label className="col-sm-3 col-form-label text-end">{TodayButton}</label>
                      <div className="col-xl-5 col-sm-9">
                        <DatePicker className="form-control digits" todayButton="Vandaag" selected={startDate} onChange={handleChange} />
                      </div>
                    </FormGroup>
                    <FormGroup className="form-row row">
                      <label className="col-sm-3 col-form-label text-end">{DisableDaysOfWeek}</label>
                      <div className="col-xl-5 col-sm-9">
                        <DatePicker className="form-control digits" placeholderText="Click to select a date" />
                      </div>
                    </FormGroup>
                    <FormGroup className="form-row row">
                      <label className="col-sm-3 col-form-label text-end">{SpecificDateRange}</label>
                      <div className="col-xl-5 col-sm-9">
                        <div className="form-row row min-date">
                          <div className="col-md-12 mb-2">
                            <DatePicker className="form-control digits"
                              selected={startDate}
                              onChange={handleChange}
                              minDate={new Date()}
                              maxDate={addDays}
                              placeholderText="Select a date between today and 5 days in the future"
                            />
                          </div>
                          <div className="col-md-12 mb-2">
                            <label className="col-sm-3 col-form-label">{MinDate}</label>
                            <DatePicker className="form-control digits"
                              selected={startDate}
                              onChange={handleChange}
                              minDate={new Date()}
                              placeholderText="Select a date after 5 days ago"
                            />
                          </div>
                          <div className="col-md-12 mb-2">
                            <label className="col-sm-3 col-form-label">{MaxDate}</label>
                            <DatePicker className="form-control digits"
                              selected={startDate}
                              onChange={handleChange}
                              maxDate={new Date()}
                              placeholderText="Select a date after 5 days ago"
                            />
                          </div>
                          <div className="col-md-12 date-range">
                            <label className="col-sm-3 col-form-label">{DateRange}</label>
                            <DatePicker className="form-control digits mb-2"
                              selected={startDate}
                              onChange={handleChange}
                              selectsStart
                              startDate={startDate}
                              endDate={endDate}
                            />
                            <DatePicker className="form-control digits"
                              selected={endDate}
                              onChange={handleChange}
                              selectsEnd
                              endDate={endDate}
                              minDate={startDate}
                            />
                          </div>
                        </div>
                      </div>
                    </FormGroup>
                    <FormGroup className="form-row row">
                      <label className="col-sm-3 col-form-label text-end">{DisableDatepicker}</label>
                      <div className="col-sm-3">
                        <div className="datepicker-here" data-language="en">
                          <DatePicker className="form-control digits"
                            selected={startDate}
                            onChange={handleChange}
                            disabled
                            placeholderText="This is disabled"
                          />
                        </div>
                      </div>
                    </FormGroup>
                    <FormGroup className="form-row mb-0 row">
                      <label className="col-sm-3 col-form-label text-end">{InlineVersion}</label>
                      <div className="col-sm-3">
                        <div className="datepicker-here" data-language="en">
                          <DatePicker className="form-control digits"
                            selected={startDate}
                            onChange={handleChange}
                            inline
                          />
                        </div>
                      </div>
                    </FormGroup>
                  </Form>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default Datepicker;