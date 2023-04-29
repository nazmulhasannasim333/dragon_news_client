import moment from 'moment';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import editor1 from '../../../assets/editorsInsight1.png';
import editor2 from '../../../assets/editorsInsight2.png';
import editor3 from '../../../assets/editorsInsight3.png';

const EditoorInsides = () => {
    return (
        <div className='m-4'>
            <h2 className='mb-3'>Editors Insight</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
        <Col >
          <Card>
            <Card.Img  variant="top" src={editor1} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text className='py-2'>
               <FaCalendarAlt /> {moment().format("MMMM D, YYYY")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img  variant="top" src={editor2} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text className='py-2'>
                <FaCalendarAlt /> {moment().format("MMMM D, YYYY")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img  variant="top" src={editor3} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text className='py-2'>
                <FaCalendarAlt /> {moment().format("MMMM D, YYYY")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
        </div>
    );
};

export default EditoorInsides;