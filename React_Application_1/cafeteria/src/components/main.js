import React from "react";
import { Row, Col, Button } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
} from "reactstrap";

export default (props) => {
  return (
    <div>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <p className="coffee_title">JP Cafe</p>
          <Button
            color="none"
            className="book-table-btn"
            onClick={(_) => {
              props.setPage(3);
            }}
          >
            View Menu
          </Button>
          <Button
            color="none"
            className="book-table-btn"
            onClick={(_) => {
              props.setPage(1);
            }}
          >
            Book a Table
          </Button>
          <Card className="Card" id="About">
            <CardBody>
              <CardTitle className="Card-Title">About Us</CardTitle>

              <CardText>
                <p className="p-text">
                  The local cafeteria in Canada, where has a passion for coffee and
                  spent a few years having ourselves trained in roasting and
                  brewing coffee to offer great quality. For us, coffee is an
                  incredible opportunity to positively impact people's lives via
                  great service and worthwhile connections.
                </p>
                <p>
                As a premium coffee roaster, We use only 100% premium Arabica beans: rosted in Canada and brew using only filtered water.
                If we can stimulate someone's imagination about what coffee can be, we've done our job.
                </p>
                <p>
                Let's explore the JP Cafeteria!
                </p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <img
            src={require("../images/cafe.jpg")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container" id="Contact">
      <Card className="Card">
            <CardBody>
              <CardTitle className="Card-Title contact-title1">Contact Us</CardTitle>
              <CardText>   
                <Container>
        <Row>
          <Col></Col>
          <Col className="contact-title2">Contact</Col>
          <Col className="contact-title2">Hours</Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col className="contact-subtitle">Address</Col>
          <Col className="contact-subtitle">Monday - Friday</Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>111ave 1111st</Col>
          <Col>8:00 AM - 6:00 PM</Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col className="contact-subtitle">Phone</Col>
          <Col className="contact-subtitle">Saturday - Sunday</Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>xxx.xxx.xxxx</Col>
          <Col>Closed</Col>
          <Col></Col>
        </Row>
    


        
      </Container>



              </CardText>
            </CardBody>
          </Card>

      </Row>
    </div>
  );
};
