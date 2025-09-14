import React, { useState } from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Button, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { BasicAccordion, BasicAccordionpara, BasicAccordiontext, CollapsibleGroupItem, UsingTheGrid } from '../../../constant';

const BasicAccordions = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <CardHeader>
            <h5>{BasicAccordion}</h5>
            <span>{UsingTheGrid} <a href="#javascript">{'card'}</a> {BasicAccordiontext}</span>
          </CardHeader>
          <CardBody>
            <div className="default-according" id="accordion">
              <Card>
                <CardHeader>
                  <h5 className='mb-0'>
                    <Button className='ps-0 btn btn-link' color='default' onClick={() => toggle(1)} >
                      {CollapsibleGroupItem}<span className="digits">1</span>
                    </Button>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>
                    {BasicAccordionpara}
                  </CardBody>
                </Collapse>
              </Card>
              <Card>
                <CardHeader>
                  <h5 className='mb-0'>
                    <Button className='ps-0 btn btn-link' color='default' onClick={() => toggle(2)} >
                      {CollapsibleGroupItem}<span className="digits">2</span>
                    </Button>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isOpen === 2}>
                  <CardBody>
                    {BasicAccordionpara}
                  </CardBody>
                </Collapse>
              </Card>
              <Card>
                <CardHeader>
                  <h5 className='mb-0'>
                    <Button className='ps-0 btn btn-link' color='default' onClick={() => toggle(3)} >
                      {CollapsibleGroupItem}<span className="digits">3</span>
                    </Button>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isOpen === 3}>
                  <CardBody>
                    {BasicAccordionpara}
                  </CardBody>
                </Collapse>
              </Card>
            </div>
          </CardBody>
        </Card >
      </Accordion >
    </Col >
  );
};

export default BasicAccordions;