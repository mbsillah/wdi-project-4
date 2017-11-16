import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import styled from 'styled-components'
import HomePage from './components/HomePage'
import Search from './components/Search'
import NavBar from './components/NavBar'
import Album from './components/Album'
import Product from './components/Product'
import Login from './components/Login'
import UserPage from './components/UserPage'


class App extends Component {

  state = {
    currentUser: {},
    currentPlaylist: '1',
    userLoggedIn: false
  }

  changeLogInState = (user) => {
    this.setState({ currentUser: user, userLoggedIn: !this.state.userLoggedIn })
  }

  setCurrentPlaylist = (playlist) => {
    this.setState({ currentPlaylist: playlist })
  }



  render() {
    const LogInComponent = () => (<Login changeLogInState={this.changeLogInState} />)
    const UserPageComponent = () => (<UserPage currentPlaylist={this.state.currentPlaylist}
      currentUser={this.state.currentUser}
      setCurrentPlaylist={this.setCurrentPlaylist} />)
    return (
      <Router>
        <div>
          <NavBar currentUser={this.state.currentUser} userLoggedIn={this.state.userLoggedIn} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search/:searchItem" component={Search} />
            <Route exact path="/album/:albumId" render={routeProps => <Album {...routeProps}
              currentUser={this.state.currentUser}
              currentPlaylist={this.state.currentPlaylist}
              userLoggedIn={this.state.userLoggedIn} />} />
            <Route exact path="/product/:productId" component={Product} />
            <Route exact path="/login" render={LogInComponent} />
            <Route exact path="/user/:userId" render={UserPageComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
