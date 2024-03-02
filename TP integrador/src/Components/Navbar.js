import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from "./IMG/CozyStar-NARANJA.jpg"
import cozy from "./IMG/Cozy.jpg"


function NavBar() {


  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  }



  return (
    <>
      <Navbar className="bg-body-tertiary" bg='dark' data-bs-theme='dark' style={{marginTop: 0, position: 'relative'}}>
        <Container>
          <Navbar.Brand href='/' style={{fontFamily: "serif, Morfeta ", position:"absolute", left:"50%", transform: "translateX()"}}>
            <img
              src={logo}
              width="133"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="" style={{fontSize:'19px', }}>  Contacto  </Nav.Link>
            <div className="vr" />
            <Nav.Link href="" style={{fontSize:'19px', }}>  Nuestros Productos  </Nav.Link>
            <div className='vr'></div>
            <Nav.Link href="Carrito" style={{fontSize:'19px', }}>  Carrito  </Nav.Link>
            </Nav>
            <Nav className='d-flex'>
            <Nav.Link href="" style={{fontSize:'19px', }}>Iniciar Sesión</Nav.Link>
            <div className="vr" />
            <Nav.Link href="" style={{fontSize:'19px', }}>Registrarme</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBar;