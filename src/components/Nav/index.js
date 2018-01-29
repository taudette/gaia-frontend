import React from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import styles from '../../styles/components/_nav.scss'

export const NavComponent = () => (
  <Navbar className={styles.nav} collapseOnSelect>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <NavItem >MY GAIA</NavItem>
        <NavItem>YOGA</NavItem>
        <NavItem>SEEKING TRUTH</NavItem>
        <NavItem>TRANSFORMATION</NavItem>
        <NavItem>FILMS & DOCS</NavItem>
        <NavItem>CENTERS</NavItem>
      </Nav>
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>{' '}
        <Button className={styles.nav} type="submit">Submit</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>

)

export default NavComponent
