import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../layout/Breadcrumb';
import AllClose from './AllClose'
import BasicAccordions from './Basic';
import PrimaryColorAccordian from './PrimaryColorAccordian';
import SecondaryColorAccordian from './SecondaryColorAccordian';
import WithIcon from './WithIcon';
import WithOperand from './WithOperand';

const Accordian = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Home" subparent="Base" title="Accordion" />
      <Container fluid={true}>
        <Row>
          <BasicAccordions />
          <AllClose />
          <PrimaryColorAccordian />
          <SecondaryColorAccordian />
          <WithIcon />
          <WithOperand />
        </Row>
      </Container>
    </Fragment>
  );
};
export default Accordian;