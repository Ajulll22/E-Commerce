import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, useLocation } from "react-router-dom";


function Header() {
  let location = useLocation()

  return (
    <>
      <Navbar variant='light' expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className={'nav-link ' + (location.pathname === '/' && 'disabled')} to={"/"}> Home </Link>
              <Link className={'nav-link ' + (location.pathname === '/shop' && 'disabled')} to={"/shop"}> Shop </Link>

            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar variant='light' expand="lg">
        <Container fluid>
          <Col>
          </Col>
          <Col md="8">
            <Form className="d-flex">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="light" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Col>
          <Col>
            <div className="text-center">
              <AiOutlineShoppingCart className="cart" size={60} />
            </div></Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;