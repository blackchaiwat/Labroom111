import React, { Fragment } from 'react';
import BreadCrumb from '../../../layout/Breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
 import { DefaultStep, StepWithIcon, StepStates, StepSizing, VerticalStep, DefaultPearlsSteps, PearlsStepsWithIcon, PearlsStepSizing, PearlsStepStates } from "./StepsComponent";
import { Default_Step, Vertical_Step, Step_With_Icon, Step_States, Step_Sizing, Default_Pearls_Steps, Pearls_Steps_Icon, Pearls_Step_Sizing, Pearls_Step_States } from '../../../constant'

const Steps = (props) => {
  return (
    <Fragment>
      <BreadCrumb parent="Home" subparent="Advance" title="Steps" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Default_Step}</h5>
              </CardHeader>
              <CardBody>
                <DefaultStep/>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Step_With_Icon}</h5>
              </CardHeader>
              <CardBody>
                <StepWithIcon />
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Step_States}</h5><span>{"A u-step with classname"} <code>{".done"}</code> {"A u-step with classname"} <code>{".error"}</code>{"A u-step with classname"} <code>{".current"}</code>{"A u-step with classname"} <code>{".disabled"}</code></span>
              </CardHeader>
              <CardBody>
                <StepStates/>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Step_Sizing}</h5><span>{"A step with classname"} <code>{".u-steps-xs"}</code><code>{".u-steps-sm"}</code><code>{".u-steps-lg"}</code></span>
              </CardHeader>
              <CardBody>
                <StepSizing />
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Vertical_Step}</h5>
              </CardHeader>
              <CardBody>
                <VerticalStep/>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Default_Pearls_Steps}</h5>
              </CardHeader>
              <CardBody>
                <DefaultPearlsSteps/>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Pearls_Steps_Icon}</h5>
              </CardHeader>
              <CardBody>
                <PearlsStepsWithIcon/>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Pearls_Step_Sizing}</h5><span>{"A Pearls step with classname"} <code>{".u-pearls-xs"}</code><code>{".u-pearls-sm"}</code><code>{".u-pearls-lg"}</code></span>
              </CardHeader>
              <CardBody>
                <PearlsStepSizing />
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Pearls_Step_States}</h5><span>{"A pearls step states with different class"}<code>{".done"}</code><code>{".currunt"}</code><code>{".error"}</code><code>{".disabled"}</code></span>
              </CardHeader>
              <CardBody>
                 <PearlsStepStates/> 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Steps;