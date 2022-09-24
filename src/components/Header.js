import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useState } from 'react';
import AuthContext from './AuthContext';
import { NavDropdown } from 'react-bootstrap';


function Header({ setKeyword }) {
  let location = useLocation()
  let navigate = useNavigate();
  const [query] = useSearchParams();
  const [search, setSearch] = useState(query.get('keyword') || '')

  const { user, auth, onLogout } = useContext(AuthContext)

  const onSearch = (event) => {
    event.preventDefault();
    if (setKeyword) {
      setKeyword(search)
    }

    navigate('/search?keyword=' + search)
  }


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
            <Nav>
              {auth ?
                <>
                  <Navbar.Text>
                    Signed in as:</Navbar.Text>
                  <NavDropdown align="end" title={user.nama_user} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={onLogout} >Log Out</NavDropdown.Item>
                  </NavDropdown>


                </>
                :
                <>
                  <Link className={'nav-link ' + (location.pathname === '/login' && 'disabled')} to={"/login"}><strong> Log In </strong></Link>
                  <Link className={'nav-link ' + (location.pathname === '/register' && 'disabled')} to={"/register"}><strong> Register </strong></Link>
                </>
              }


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar variant='light' expand="lg">
        <Container fluid>
          <Col>
          </Col>
          <Col md="8">
            <Form onSubmit={onSearch} className="d-flex">
              <InputGroup>
                <Form.Control
                  required
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)
                  }
                />
                <Button type='submit' variant="light" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Col>
          <Col>
            <div className="text-center">
              <Link to={"/cart"}>
                <AiOutlineShoppingCart className="cart" size={60} />
              </Link>
            </div></Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;