import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MyNav = (props) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Browse</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default MyNav 