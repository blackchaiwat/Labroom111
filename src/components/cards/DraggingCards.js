import React, { Fragment } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import { Card, CardBody, CardHeader, Container, Row } from 'reactstrap'
 import Board from 'react-trello';

const DraggingCards = () => {
    const Draggabledata = {
        lanes: [
            {
                id: '1',
                cards: [
                    {
                        id: '1',
                        title: "Basic Card",
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
                        draggable: false,
                    },
                ]
            },
            {
                id: '2',
                cards: [
                    {
                        id: '2',
                        title: "Flat Card",
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
                        draggable: false,
                    },
                ]
            },
            {
                id: '3',
                cards: [
                    {
                        id: '3',
                        title: "Withot shadow Card",
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
                        draggable: false,
                    },
                ]
            },
            {
                id: '4',
                cards: [
                    {
                        id: '4',
                        title: "Icon in Heading",
                        icon: <i class="icon-move me-2"></i>,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
                        draggable: false,
                    },
                ]
            },
            {
                id: '5',
                cards: [
                    {
                        id: '5',
                        title: "Card sub Title",
                        span: 'Using the Card component, you can extend the default collapse behavior to create an accordion.',
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
                        draggable: false,
                    },
                ]
            }
        ]
    }

    return (
        <Fragment>
            <BreadCrumb parent="Home" subparent="Cards" title="Draggable Card" />
            <Container fluid={true}>
                <Row className="ui-sortable" >
                    <Card>
                        <CardHeader>
                            <h5>Draggable card</h5>
                        </CardHeader>
                        <CardBody>
                            <Board draggable={true} style={{ backgroundColor: 'transparent' }} data={Draggabledata} /> 
                        </CardBody>
                    </Card>
                     
                </Row>
            </Container>
        </Fragment>
    );
};

export default DraggingCards;