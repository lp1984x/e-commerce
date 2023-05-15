import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./navbar.scss";
import * as Icon from "react-bootstrap-icons";

export default function NavBar() {
  const menus = [
    "some 1",
    "some 2",
    "some 3",
    "some 4",
    "some 5",
    "some 6",
    "some 7",
    "some 8",
  ];
  return (
    <Navbar expand="lg" className="nav-bar">
      <Container fluid className="d-block position-relative">
        <Navbar.Toggle className="nav-bar__toggler" />

        <form className="nav-bar__search-section">
          <input
            className="nav-bar__search"
            placeholder="Hey, what are you looking for?"
          />
          <Icon.Search className="nav-bar__find" />
        </form>
        <div className="nav-bar__cart-section">
          <a href="#none" className="nav-bar__link">
            <Icon.Heart className="nav-bar__icons" />
            <p className="d-none d-lg-inline m-0 ms-lg-2">Wishlist</p>
          </a>
          <a href="#none" className="nav-bar__link">
            <Icon.Bag className="nav-bar__icons" />
            <p className="d-none d-lg-inline m-0 ms-lg-2">Items</p>
          </a>
        </div>

        <Navbar.Offcanvas placement="start">
          <Offcanvas.Header
            closeButton
            closeLabel="Clode"
            closeVariant="white"
            className="nav-bar__offcanvas-header"
          >
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1">
              {menus.map((item, index) => (
                <Nav.Link href={"#" + item} key={index}>
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
