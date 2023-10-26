import React from 'react'
import { Head } from '../model/Type'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface HeaderProps{
  info:Head;
}

const Header:React.FC<HeaderProps> = ({info}) => {
  return (
    <header id="head">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <h1>
              <a href={info.home}>
                <img src={info.logo} alt="logo" />
              </a>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className="me-auto">
              {
                info.navi.map((v, i) => {
                  return (
                    <Nav.Link key={i} href={v.link}>{v.title}</Nav.Link>
                  )
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header