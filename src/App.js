import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Tab, Nav, NavItem, Navbar } from 'react-bootstrap';

import Page from './Page';


class App extends Component {

  handleSelect = (location) => {
    this.props.history.push(location);
  }

  // mountOnEnter: such that we don't render the tab until they are needed
  // unmountOnExit is absent so the content of the tab is persistent once they
  // have been mounted.
  render() {
    return (
      <Tab.Container id="controlled-tabs" activeKey={this.props.location.pathname} onSelect={this.handleSelect}>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Welcome</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey="/page1">
                Tab 1
              </NavItem>
              <NavItem eventKey="/page2">
                Tab 2
              </NavItem>
            </Nav>
          </Navbar>
          <Tab.Content animation mountOnEnter>
            <Tab.Pane eventKey="/"><Page name="Root"/></Tab.Pane>
            <Tab.Pane eventKey="/page1"><Page name="Page 1"/></Tab.Pane>
            <Tab.Pane eventKey="/page2"><Page name="Page 2"/></Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    );
  }
}

export default withRouter(App);
