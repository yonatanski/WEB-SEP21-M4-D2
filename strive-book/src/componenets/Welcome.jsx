import {Jumbotron,Container} from 'react-bootstrap'


const Welcome = (props) => (
 <Jumbotron fluid className="mt-5">
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
)

export default Welcome