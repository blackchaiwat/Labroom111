import React, { useState } from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Button, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { AccordionWithIconOnTitle, Accordioncode, Accordionspan, Add, CollapsibleGroupItem, ColorPara } from '../../../constant';

const WithIcon = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  const data = [
    {
      id: 1,
      icon: 'icofont-briefcase-alt-2'
    },
    {
      id: 2,
      icon: 'icofont-support'
    },
    {
      id: 3,
      icon: 'icofont-tasks-alt'
    },
  ];
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <CardHeader>
            <h5>{AccordionWithIconOnTitle}</h5>
            <span>{Add} <code>{Accordioncode}</code> {Accordionspan}</span>
          </CardHeader>
          <CardBody>
            <div className="default-according" id="accordion1">
              {data.map((accordian, i) =>
                <Card key={i}>
                  <CardHeader className="bg-primary">
                    <h5 className='mb-0' >
                      <Button className='btn btn-link text-white' color='default' onClick={() => toggle(accordian.id)} >
                        <i className={`icofont ${accordian.icon}`}></i>{CollapsibleGroupItem}<span className="digits">{accordian.id}</span>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isOpen === accordian.id}>
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

export default WithIcon;