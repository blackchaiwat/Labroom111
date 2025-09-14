import React, { useState } from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Button, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { Add, CollapsibleGroupItem, ColorAccordion, ColorPara, Colorparatext, bgstar } from '../../../constant';

const PrimaryColorAccordian = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  const data = [1, 2, 3];
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <CardHeader>
            <h5>{ColorAccordion}</h5>
            <span>{Add} <code>{bgstar}</code> {Colorparatext}</span>
          </CardHeader>
          <CardBody>
            <div className="default-according" id="accordion1">
              {data.map((accordian, i) =>
                <Card key={i}>
                  <CardHeader className="bg-primary">
                    <h5 className='mb-0' >
                      <Button className='btn btn-link ps-0 text-white' color='default' onClick={() => toggle(accordian)} >
                        {CollapsibleGroupItem}<span className="digits">{accordian}</span>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isOpen === accordian}>
                    <CardBody>
                      {ColorPara}
                    </CardBody>
                  </Collapse>
                </Card>
              )}
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col >
  );
};

export default PrimaryColorAccordian;