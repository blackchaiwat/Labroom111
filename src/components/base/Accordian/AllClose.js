import React, { useState } from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Button, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { AllCloseAccordion, BasicAccordionpara, BasicAccordiontext, CollapsibleGroupItem, UsingTheGrid } from '../../../constant';
const AllClose = () => {
  const [isOpen, setIsOpen] = useState(0);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  const data = [1, 2, 3, 4, 5];
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <CardHeader>
            <h5>{AllCloseAccordion}</h5>
            <span>{UsingTheGrid} <a href="#javascript">{'card'}</a> {BasicAccordiontext}</span>
          </CardHeader>
          <CardBody>
            <div className="default-according" id="accordion">
              {data.map((accordian, i) =>
                <Card key={i}>
                  <CardHeader>
                    <h5 className='mb-0' >
                      <Button className='btn btn-link ps-0' color='default' onClick={() => toggle(accordian)} >
                        {CollapsibleGroupItem}<span className="digits">{accordian}</span>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isOpen === accordian}>
                    <CardBody>
                      {BasicAccordionpara}
                    </CardBody>
                  </Collapse>
                </Card>
              )}
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default AllClose;