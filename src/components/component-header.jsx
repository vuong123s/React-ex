import React from "react";
import Logo from "../img/logo.png";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Carousel,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
/*
  <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Homepage</Nav.Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Light Novel</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Study Books</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Light Novel</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Study Books</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Blog" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Light Novel</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Study Books</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Books" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Light Novel</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Study Books</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Landing" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Light Novel</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Study Books</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <div className="style-search">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 button-search"
            />
            <Button>
              <BsSearch />
            </Button>
          </div>
          <a src="#">Log In</a>
          <span>Card</span>
        </Form>
      </Navbar.Collapse>
    </Navbar>
 */
export default function ComponentHeader() {
  return (
    <div className="Header-Component">
      <div className="Header">
        <div className="nav-checkbox">
          <label htmlFor="check">
            <GiHamburgerMenu className="menu-icon-style" />
          </label>
        </div>
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>
        <input type="checkbox" id="check" />
        <div className="Header-menu">
          <ul className="Header-menu-list">
            <li>Homepage</li>
            <li>Shop</li>
            <li>Pages</li>
            <li>Books</li>
            <li>Landing</li>
          </ul>
        </div>
        <div className="Header-D">
          <div className="Login-Search">
            <input type="checkbox" id="check-search-bar" />
            <input type="text" placeholder="Search" className="search-bar" />
            <label htmlFor="check-search-bar">
              <BsSearch className="Search-icon" />
            </label>
          </div>
          <a href="#" className="Login-style">
            Log In
          </a>
          <div className="card-buy">
            <span>Card</span>
            <span className="amount">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
