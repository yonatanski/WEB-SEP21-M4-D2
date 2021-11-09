import { Component } from 'react'
import {Card,Button,Container,Col,Row} from 'react-bootstrap'
import history from '../data/history.json'


const LatestRelease = (props) => (
  <Container>
    <h1>Latest Release</h1>
    <Row>
      <Col className="d-flex flex-wrap book-card">
        {history.map((book) => (
          <Card
            style={{ width: "10rem", height: "15rem"}}
            className="mt-2 mb-2 ml-3"
            key={book.asin}
          >
            <Card.Img variant="top" src={book.img} className="img-fluid" />
            {/* <Card.Body> */}
              {/* <Card.Title className="mx-n3 my-n2">{item.title}</Card.Title> */}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            {/* </Card.Body> */}
          </Card>
        ))}
      </Col>
    </Row>
  </Container>
);
export default LatestRelease;
