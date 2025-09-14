import React, { Fragment, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Row, Tooltip } from "reactstrap";
import { BasicTooltip, Direction, HTMLElements, HoverMe, Offsets, PopoverTitle } from "../../../constant";
import BreadCrumb from "../../../layout/Breadcrumb";
import { MultiTooltipDirection, MultiTooltipHtmlElement, MultiTooltipOffset } from "./TooltipComponent";

const Tooltips = () => {
  const [basictooltip, setbasictooltip] = useState(false);
  const toggle = () => setbasictooltip(!basictooltip);
  return (
    <Fragment>
      <BreadCrumb parent='Home' subparent='Base' title='Tooltip' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader>
                <h5>{BasicTooltip}</h5>
              </CardHeader>
              <CardBody className='btn-showcase'>
                <Button color='primary' id='TooltipExample'>
                  {HoverMe}
                </Button>
                <Tooltip placement='top' isOpen={basictooltip} target='TooltipExample' toggle={toggle}>
                  {PopoverTitle}
                </Tooltip>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12'>
            <Card>
              <CardHeader>
                <h5>{Direction}</h5>
              </CardHeader>
              <CardBody className='btn-showcase'>
                <MultiTooltipDirection />
              </CardBody>
            </Card>
          </Col>
          <Col sm='12'>
            <Card>
              <CardHeader>
                <h5>{HTMLElements}</h5>
              </CardHeader>
              <CardBody className='btn-showcase'>
                <MultiTooltipHtmlElement />
              </CardBody>
            </Card>
          </Col>
          <Col sm='12'>
            <Card>
              <CardHeader>
                <h5>{Offsets}</h5>
              </CardHeader>
              <CardBody className='btn-showcase'>
                <MultiTooltipOffset />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Tooltips;
