import moment from "moment";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import editor1 from "../../../assets/1.png";
import editor2 from "../../../assets/2.png";
import editor3 from "../../../assets/3.png";

const HighLights = () => {
  return (
    <div className="my-4">
      <Row xs={1} md={2} lg={1} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={editor1} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <Card.Text className="py-2">
                  <span className="fw-semibold">Arts</span>
                  <FaCalendarAlt className="ms-4 me-1" />{" "}
                  {moment().format("MMMM D, YYYY")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={editor2} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <Card.Text className="py-2">
                  <span className="fw-semibold">Entertainment</span>
                  <FaCalendarAlt className="ms-4 me-1" />{" "}
                  {moment().format("MMMM D, YYYY")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={editor3} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <Card.Text className="py-2">
                  <span className="fw-semibold">Sports</span>
                  <FaCalendarAlt className="ms-4 me-1" />{" "}
                  {moment().format("MMMM D, YYYY")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HighLights;
