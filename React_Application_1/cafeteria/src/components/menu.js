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
              props.setPage(1);
            }}
          >
            Book a Table
          </Button>
          <Card className="" id="About">
            <CardBody>
              <CardTitle className="Card-Title">Menu</CardTitle>
              <Col>
                <img
                  src={require("../images/cafe_menu.jpg")}
                  alt="cafe"
                  className="big-img"
                />
              </Col>
              <CardText></CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
