import { Component } from 'react'
import {Card,Button,Container,Col,Row} from 'react-bootstrap'
import history from '../data/history.json'



export default  function LatestRelease (){
  return <div>{
history.map(book=>{
  return <Container>
 
    <Row className="mt-3 d-flex flex-wrap ">
                 
  <Col xs={12} md={6} className="text-center">
  <Card>
  <Card.Img variant="top" src={book.img} />
  <Card.Body>
    <Card.Title>{book.tittle}</Card.Title>
    <Card.Text>
       
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
</Row> 
</Container> 
})
}</div>
}