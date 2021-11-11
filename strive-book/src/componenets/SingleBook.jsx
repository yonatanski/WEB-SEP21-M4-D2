import {Card,Button,Container,Col,Row} from "react-bootstrap"


const SingleBook =({book}) => (

    <Container>
    
    <Row>
      <Col className="d-flex flex-wrap book-card">
      <Card 
            className="mt-2 mb-2 ml-3"
         >
            <Card.Img variant="top" src={book.img} className="img-fluid book-card" />
            <Card.Body> 
              <Card.Title className="mx-n3 my-n2">{book.title}</Card.Title>
              <Card.Text>
               
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
             </Card.Body>
          </Card>
      </Col>
    </Row>
  </Container>
)
export default SingleBook;