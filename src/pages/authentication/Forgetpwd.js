import React from 'react';
import {Container,Row,Col,Card,Form,Label,Input,Button} from 'reactstrap' 
import { CREATEPASSWORD,NewPassword,RetypePassword,Done,EnterMobileNumber,EnterOTP,Resend,ResetPassword,Send} from "../../constant";
const Forgetpwd = (props) => {
    return (
    <div className="page-wrapper">
      <Container fluid={true}>
        <div className="authentication-main mt-0">
          <Row>
            <Col md="12" className="p-0">
              <div className="auth-innerright auth-minibox">
                <div className="reset-password-box">
                  <div className="text-center"><img src={require("../../assets/images/other-images/creative-logo1.png")} alt=""/></div>
                  <Card className="mt-4 mb-0">
                    <h4>{ResetPassword}</h4>
                    <Form className="theme-form">
                      <div className='form-group'>
                        <Label className="col-form-label">{EnterMobileNumber}</Label>
                        <Row className='form-row'>
                          <Col md="2">
                            <Input className="form-control digits mb-1" type="text" defaultValue="+ 91"/>
                          </Col>
                          <Col md="7" xl="8">
                            <Input className="form-control digits mb-1" type="tel" defaultValue="000-000-0000"/>
                          </Col>
                          <Col md="2">
                            <Button color="primary m-0">{Send}</Button>
                          </Col>
                        </Row>
                      </div>
                      <div className="text-center mt-4 mb-4"><span className="reset-password-link">{"If don't receive OTP?"}  <a className="btn-link text-danger" href="#javascript">{Resend}</a></span></div>
                      <div className="rounded p-4 opt-box form-group">
                        <Label className="col-form-label pt-0">{EnterOTP}</Label>
                        <Row form>
                          <Col>
                            <Input className="form-control digits text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                          </Col>
                          <Col>
                            <Input className="form-control digits text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                          </Col>
                          <Col>
                            <Input className="form-control digits text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                          </Col>
                        </Row>
                      </div>
                      <h6 className="f-14 mt-4 mb-3">{CREATEPASSWORD}</h6>
                      <div className='form-group'>
                        <Label className="col-form-label">{NewPassword}</Label>
                        <Input className="form-control" type="password"/>
                      </div>
                      <div className='form-group'>
                        <Label className="col-form-label">{RetypePassword}</Label>
                        <Input className="form-control" type="password"/>
                      </div>
                      <div className="form-row mb-2 form-group">
                        <Col md="2">
                          <Button color="primary">{Done}</Button>
                        </Col>
                      </div>
                    </Form>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    );
}

export default Forgetpwd;