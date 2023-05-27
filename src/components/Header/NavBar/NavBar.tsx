import React from "react";
import { Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import "./navbar.scss";
import * as Icon from "react-bootstrap-icons";
import { useFetchCategorie } from "../../../dummyJson/dummyJson";

export default function NavBar() {
  const { categories } = useFetchCategorie();
  const womens = (() => {
    const reg = /^womens/;
    return categories.filter((item) => reg.test(item));
  })();
  const mens = (() => {
    const reg = /^mens/;
    return categories.filter((item) => reg.test(item));
  })();
  const others = (() => {
    const reg = /mens/;
    return categories.filter(
      (item, index) => 4 < index && 17 > index && !reg.test(item)
    );
  })();
  console.log(others);

  return (
    <Navbar expand="lg" className="nav-bar">
      <div className="container-fluid container-lg d-flex flex-wrap position-relative p-0">
        <Navbar.Toggle className="nav-bar__toggler" />
        <div className="menu-button"></div>

        <div className="w-100">
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
            <Nav className=" justify-content-center flex-grow-1">
              <NavDropdown title="Womens" id="nav-dropdown">
                {womens.map((item) => (
                  <NavDropdown.Item key={item}>{item}</NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title="Mens" id="nav-dropdown">
                {mens.map((item) => (
                  <NavDropdown.Item key={item}>{item}</NavDropdown.Item>
                ))}
              </NavDropdown>
              {others.map((item) => (
                <Nav.Item key={item}>
                  <Nav.Link eventKey={item}>{item}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    </Navbar>
  );
}
