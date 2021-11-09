import {Jumbotron,Container} from 'react-bootstrap'


const Welcome = (props) => (
 <Jumbotron fluid className="mt-2">
 <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqepcW5sTg3jOGNKksN7_QvIkY6S3qiWV8Q&usqp=CAU" alt="" />
    <h1 fluid  className="ml-2">Strive Book Store</h1>
    <p className="ml-1">
      You will find a collection of books here
    </p>
  
</Jumbotron>
)

export default Welcome