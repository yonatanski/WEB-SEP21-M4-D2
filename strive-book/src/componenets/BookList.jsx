import React from "react";
import SingleBook from "./SingleBook"
import {Card,Button,Container,Col,Row,Form} from 'react-bootstrap'


class BookList extends React.Component {

    state = {
         searchQuery: ''
 
    }

  render() {
      return(
     <Container>
         <Row> 
             <Col>
             <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Search Here</Form.Label>
            <Form.Control type="email" placeholder="..." value={this.state.searchQuery} 
            onChange = {e=>this.setState({searchQuery:e.target.value})} />
           
            </Form.Group>

             </Col>
         </Row>
         <Row>
           
             {
                 this.props.books.filter(b =>b.title.toLowerCase().includes(this.state.searchQuery)).map(b =>(
                     <Col xs={3}>
                       <SingleBook book ={b}/>
                     </Col>
                 ))
             }
           
         </Row>
     </Container>
     )
     }
}
export default BookList;