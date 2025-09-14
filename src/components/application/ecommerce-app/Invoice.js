import React, { Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { Button, Card, CardBody, Col, Container, Form, Media, Row, Table } from "reactstrap";
import { Cancel, Creative, HelloCreative, InvoiceHash, IssuedMay, JohanDeo, JohanDeoMailId, PaymentDue, Price, Print, ProductName, ProjectDescription, ProjectDescriptionDetails, Quantity, Sub_total, ThankBusiness, ThankBusinessDesc } from "../../../constant";
import BreadCrumb from "../../../layout/Breadcrumb";
import { getCartTotal } from "../../../services/ecommerce.service";

class Invoice extends React.Component {
  render() {
    const { cart, symbol } = this.props;
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <Col sm='12'>
              <Card>
                <CardBody>
                  <div className='invoice'>
                    <div>
                      <div>
                        <Row>
                          <Col sm='6'>
                            <Media>
                              <Media left>
                                <Media className='media-object img-60' src={require("../../../assets/images/other-images/creative-logo1.png")} alt='' />
                              </Media>
                              <Media body className='m-l-20'>
                                <h4 className='media-heading'>{Creative}</h4>
                                <p>
                                  {HelloCreative}
                                  <br />
                                  <span className='digits'>{"289-335-6503"}</span>
                                </p>
                              </Media>
                            </Media>
                          </Col>
                          <Col sm='6'>
                            <div className='text-md-end'>
                              <h3>
                                {InvoiceHash}
                                <span className='digits counter'>{"1069"}</span>
                              </h3>
                              <p>
                                {IssuedMay}
                                <span className='digits'> {"27, 2015"}</span>
                                <br />
                                {PaymentDue} <span className='digits'>{"27, 2015"}</span>
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <hr />

                      <Row>
                        <Col md='4'>
                          <Media>
                            <Media left>
                              <Media className='media-object rounded-circle img-60' src={require("../../../assets/images/user/1.jpg")} alt='' />
                            </Media>
                            <Media body className='m-l-20'>
                              <h4 className='media-heading'>{JohanDeo}</h4>
                              <p>
                                {JohanDeoMailId}
                                <br />
                                <span className='digits'>{"555-555-5555"}</span>
                              </p>
                            </Media>
                          </Media>
                        </Col>
                        <Col md='8'>
                          <div className='text-md-end' id='project'>
                            <h6>{ProjectDescription}</h6>
                            <p>{ProjectDescriptionDetails}</p>
                          </div>
                        </Col>
                      </Row>

                      <div>
                        <div className='table-responsive invoice-table' id='table'>
                          <Table bordered striped>
                            <tbody>
                              <tr>
                                <td className='item'>
                                  <h6 className='p-2 mb-0'>{ProductName}</h6>
                                </td>
                                <td className='quantity'>
                                  <h6 className='p-2 mb-0'>{Quantity}</h6>
                                </td>
                                <td className='Rate'>
                                  <h6 className='p-2 mb-0'>{Price}</h6>
                                </td>
                                <td className='subtotal'>
                                  <h6 className='p-2 mb-0'>{Sub_total}</h6>
                                </td>
                              </tr>
                              {cart.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td>
                                      <label>{item.name}</label>
                                    </td>
                                    <td>
                                      <p className='itemtext digits'>{item.qty}</p>
                                    </td>
                                    <td>
                                      <p className='itemtext digits'>
                                        {symbol}
                                        {item.price}
                                      </p>
                                    </td>
                                    <td>
                                      <p className='itemtext digits'>
                                        {symbol}
                                        {item.price}
                                      </p>
                                    </td>
                                  </tr>
                                );
                              })}
                             
                              <tr>
                                <td />
                                <td />
                                <td className='Rate'>
                                  <h5 className='mb-0 p-2'>{"Total"}</h5>
                                </td>
                                <td className='payment digits'>
                                  <h5 className='mb-0 p-2'>
                                    {symbol} {getCartTotal(cart)}
                                  </h5>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                        <Row>
                          <Col md='8'>
                            <div>
                              <p className='legal'>
                                <strong>{ThankBusiness}</strong> {ThankBusinessDesc}
                              </p>
                            </div>
                          </Col>
                          <Col md='4'>
                            <Form className='text-end'>
                              <input type='image' src={require("../../../assets/images/other-images/paypal.png")} name='submit' alt='PayPal - The safer, easier way to pay online!' />
                            </Form>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
const PrintComponent = () => {
  const cart = useSelector((content) => content.Cartdata.cart);
  const symbol = useSelector((content) => content.data.symbol);
  const componentRef = useRef();
  return (
    <Fragment>
      <BreadCrumb parent='Home' subparent='Ecommerce' title='Invoice' />
      <Invoice cart={cart} symbol={symbol} ref={componentRef} />
      <Col sm='12' className='text-center my-3'>
        <ReactToPrint
          trigger={() => (
            <Button color='primary' className='me-2'>
              {Print}
            </Button>
          )}
          content={() => componentRef.current}
        />
        <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}>
          <Button color='secondary'>{Cancel}</Button>
        </Link>
      </Col>
    </Fragment>
  );
};

export default PrintComponent;
