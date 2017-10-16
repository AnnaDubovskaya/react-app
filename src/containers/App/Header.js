import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import { getToday } from '../../utils/dateUtils';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        News App
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Text pullRight>
        {getToday()}
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
