import React from "react"
import {Card,Button,Container,Col,Row} from "react-bootstrap"


class SingleBook extends React.Component   {

   state ={
       selected: false
   }


    render(){
        return (
    <Container>
    
    <Row>
      <Col className="d-flex flex-wrap book-card">
      <Card 
            className="mt-2 mb-2 ml-3"
            style ={{border: this.state.selected? "3px solid green" :"none"}}
            onClick={()=> this.setState({selected:!this.state.selected})}
         >
            <Card.Img variant="top" src={this.props.book.img} className="img-fluid book-card" />
            <Card.Body> 
              <Card.Title className="mx-n3 my-n2">{this.props.book.title}</Card.Title>
              <Card.Text>
               
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
             </Card.Body>
          </Card>
      </Col>
    </Row>
  </Container>
  )
  }
}

   

export default SingleBook;