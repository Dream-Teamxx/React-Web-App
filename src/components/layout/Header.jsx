import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import {} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../screens/home/Home';
import About from '../screens/about/About';
import Contacts from '../screens/contacts/Contacts';
import Login from '../screens/log-in/Login';
import Usefull from '../screens/Usefull/Usefull';

// Header Styles

import './Header.css';




const Header = () => {
    return ( 
        <>
            <Navbar className='nav-bar text-light bg' expand="lg">
                <Container>
                    <Navbar.Brand className='text-light' href="#home">Logo Type</Navbar.Brand>
                    <div>
                        <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link className='text-muted text-uppercase text-decoration-none hd-link' to='/'>Главная</Link></Nav.Link>
                            <Nav.Link><Link className='text-muted text-uppercase text-decoration-none hd-link' to='/contacts'>Контакты</Link></Nav.Link>
                            <Nav.Link><Link className='text-muted text-uppercase text-decoration-none hd-link' to='/about'>О чат-боте</Link></Nav.Link>
                            <Nav.Link><Link className='text-muted text-uppercase text-decoration-none hd-link' to='/usefull'>Услуги</Link></Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><Link to='/login'>Войти</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/usefull' element={<Usefull/>}/>
            </Routes>
        </>
     );
}
 
export default Header;