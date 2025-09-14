import React, { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Address, BillingDetails, CashOnDelivery, CheckPayments, ContinueShopping, Country, CountryMenu, EmailAddress, FirstName, LastName, Option1, Option2, PayPal, Phone, PlaceOrder, PostalCode, Product, Shipping, StateCountry, Subtotal, Total, TownCity } from "../../../constant";
import BreadCrumb from "../../../layout/Breadcrumb";
import { getCartTotal } from "../../../services/ecommerce.service";

const EcommerceCheckout = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const cart = useSelector((content) => content.Cartdata.cart);
  const symbol = useSelector((content) => content.data.symbol);

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      alert("You submitted the form and stuff!");
      navigate(`${process.env.PUBLIC_URL}/ecommerce/invoice`);
    } else {
      console.log(errors);
    }
  };

  return (
    <Fragment>
      <BreadCrumb parent='Home' subparent='Ecommerce' title='Checkout' />
      <Container fluid>
        <Card className='checkout'>
          <CardHeader>
            <h5>{BillingDetails}</h5>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg='6' sm='12'>
                <Form onSubmit={handleSubmit(onSubmit)} className='needs-validation'>
                  <FormGroup>
                    <Label>{FirstName}</Label>
                    <Controller name='firstName' control={control} defaultValue='' rules={{ required: true }} render={({ field }) => <Input {...field} />} />
                    {errors.firstName && <span style={{ color: "#ff5370" }}>This field is required</span>}
                  </FormGroup>
                  <FormGroup>
                    <Label>{LastName}</Label>
                    <Controller name='lastName' control={control} defaultValue='' rules={{ required: true }} render={({ field }) => <Input {...field} />} />
                    {errors.lastName && <span style={{ color: "#ff5370" }}>Last name is required</span>}
                  </FormGroup>
                  <FormGroup>
                    <Label>{Phone}</Label>
                    <Controller name='phone' control={control} defaultValue='' rules={{ required: true, pattern: /\d+/ }} render={({ field }) => <Input {...field} />} />
                    {errors.phone && <span style={{ color: "#ff5370" }}>Please enter a valid phone number</span>}
                  </FormGroup>
                  <FormGroup>
                    <Label>{EmailAddress}</Label>
                    <Controller name='email' control={control} defaultValue='' rules={{ required: true, pattern: /^\S+@\S+$/i }} render={({ field }) => <Input {...field} />} />
                    {errors.email && <span style={{ color: "#ff5370" }}>Please enter a valid email address</span>}
                  </FormGroup>
                  <FormGroup>
                    <Label>{Country}</Label>
                    <Controller
                      name='country'
                      control={control}
                      defaultValue=''
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Input type='select' {...field}>
                          {CountryMenu.map((item, index) => (
                            <option key={index}>{item}</option>
                          ))}
                        </Input>
                      )}
                    />
                    {errors.country && <span style={{ color: "#ff5370" }}>Please select a country</span>}
                  </FormGroup>
                  <FormGroup>
                    <Label>{Address}</Label>
                    <Controller name='address' control={control} defaultValue='' rules={{ required: true }} render={({ field }) => <Input {...field} />} />
                    {errors.address && <span style={{ color: "#ff5370" }}>Address is required</span>}
                  </FormGroup>
                  <FormGroup>
                    <Label>{TownCity}</Label>
                    <Controller name='city' control={control} defaultValue='' rules={{ required: true }} render={({ field }) => <Input {...field} />} />
                    {errors.city && <span style={{ color: "#ff5370" }}>City is required</span>}
                  </FormGroup>
                  <FormGroup>
                    <Label>{StateCountry}</Label>
                    <Controller name='state' control={control} defaultValue='' rules={{ required: true }} render={({ field }) => <Input {...field} />} />
                    {errors.state && <span style={{ color: "#ff5370" }}>State is required</span>}
                  </FormGroup>
                  <FormGroup>
                    <Label>{PostalCode}</Label>
                    <Controller name='postalCode' control={control} defaultValue='' rules={{ required: true }} render={({ field }) => <Input {...field} />} />
                    {errors.postalCode && <span style={{ color: "#ff5370" }}>Postal code is required</span>}
                  </FormGroup>
                  <Button color='primary' type='submit'>
                    {PlaceOrder}
                  </Button>
                </Form>
              </Col>
              <Col lg='6' sm='12'>
                <div className='checkout-details'>
                  <div className='order-box'>
                    <div className='title-box'>
                      <div className='checkbox-title'>
                        <h4>{Product} </h4>
                        <span>{Total}</span>
                      </div>
                    </div>
                    <ul className='qty'>
                      {cart.map((item, index) => {
                        return (
                          <li key={index}>
                            {item.name} × {item.qty}{" "}
                            <span>
                              {symbol} {item.sum}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <ul className='sub-total'>
                      <li>
                        {Subtotal}{" "}
                        <span className='count'>
                          {symbol}
                          {getCartTotal(cart)}
                        </span>
                      </li>
                      <li className='shipping-class'>
                        {Shipping}
                        <div className='shopping-checkout-option'>
                          <Label className='d-block'>
                            <Input className='checkbox_animated' type='checkbox' />
                            {Option1}
                          </Label>
                          <Label className='d-block'>
                            <Input className='checkbox_animated' type='checkbox' defaultChecked />
                            {Option2}
                          </Label>
                        </div>
                      </li>
                    </ul>
                    <ul className='sub-total total'>
                      <li>
                        {Total}{" "}
                        <span className='count'>
                          {symbol} {getCartTotal(cart)}
                        </span>
                      </li>
                    </ul>
                    <div className='animate-chk'>
                      <Row>
                        <Col>
                          <Label className='d-block'>
                            <Input className='radio_animated' type='radio' name='rdo-ani' />
                            {CheckPayments}
                          </Label>
                          <Label className='d-block'>
                            <Input className='radio_animated' type='radio' name='rdo-ani' />
                            {CashOnDelivery}
                          </Label>
                          <Label className='d-block'>
                            <Input className='radio_animated' type='radio' name='rdo-ani' defaultChecked />
                            {PayPal}
                          </Label>
                        </Col>
                      </Row>
                    </div>
                    <div className='text-end mt-2'>
                      <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}>
                        <Button color='primary' className='cart-btn-transform'>
                          {ContinueShopping}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default EcommerceCheckout;
