import React, { Component } from "react";
import { Switch, Route, Link, Image } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import Kereses from "./sajatosztalyok/Kereses"
import Szereplok from "./sajatosztalyok/Szereplok"
import AdminFelvitel from "./sajatosztalyok/AdminFelvitel"
import AdminTorles from "./sajatosztalyok/AdminTorles"

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      
      <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/*<Navbar.Brand href="#home">
        
        Dice Roller
      </Navbar.Brand>*/}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link to={"/"} className="navbar-brand">
            Star Wars adatbázis
          </Link>
          <div className="navbar-nav mr-auto">
            {/*<li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>*/}
            {/*<li className="nav-item">
              <Link to={"/Kereses"} className="nav-link">
                Keresés
              </Link>
            </li>*/}
            <li className="nav-item">
              <Link to={"/Szereplok"} className="nav-link">
                Szereplők
              </Link>
            </li>

            {/*{showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}*/}
                                                                                                                              {/* Admin menüpont */}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/AdminFelvitel"} className="nav-link">
                  Felvitel
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/AdminTorles"} className="nav-link">
                  Törlés
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin lap
                </Link>
              </li>
            )}

            {/*{currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}*/}
          </div>
          {/*<Nav.Link href="#features">Features</Nav.Link>*/}
          {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
          {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>*/}
        </Nav>
        <Nav>
        {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Kilépés
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Belépés
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Regisztráció
                </Link>
              </li>
            </div>
          )}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>

        
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />

            <Route path="/Kereses" component={Kereses} />
            <Route path="/Szereplok" component={Szereplok} />
            <Route path="/AdminFelvitel" component={AdminFelvitel} />
            <Route path="/AdminTorles" component={AdminTorles} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
