import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import { saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from './utils/sessionUtilHeader'
//import styled from 'styled-components'
import HomePage from './components/HomePage'
import Search from './components/Search'
import NavBar from './components/NavBar'
import Album from './components/Album'
import Product from './components/Product'
import Login from './components/Login'
import UserPage from './components/UserPage'
import SignUpLogIn from './components/SignUpLogIn'

class App extends Component {

  state = {
    currentUser: {},
    currentPlaylist: '1',
    userLoggedIn: false
  }

  async componentWillMount() {
    const signedIn = userIsLoggedIn()
    if (signedIn) {
      setAxiosDefaults()
      this.setState({ userLoggedIn: true })
    }

  }

  signUp = async (email, password, password_confirmation) => {
    try {
      const payload = {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      }
      const res = await axios.post('/auth', payload)
      this.setState({ currentUser: res.data.data })
      this.changeLogInState()
    } catch (error) {
      console.log(error)
    }
  }

  signIn = async (email, password) => {
    try {
      const payload = {
        email,
        password
      }
      const res = await axios.post('/auth/sign_in', payload)
      this.setState({ currentUser: res.data.data })
      saveAuthTokens(res.headers)
      this.changeLogInState()
    } catch (error) {
      console.log(error)
    }
  }

  signOut = () => {
    this.setState({ userLoggedIn: false })
  }

  changeLogInState = () => {
    this.setState({ userLoggedIn: !this.state.userLoggedIn })
  }

  setCurrentPlaylist = (playlist) => {
    this.setState({ currentPlaylist: playlist })
  }



  render() {
    const SignUpLogInComponent = () => (
      <SignUpLogIn
        signUp={this.signUp}
        signIn={this.signIn} />
    )
    const LogInComponent = () => (<Login changeLogInState={this.changeLogInState} />)
    const UserPageComponent = () => (<UserPage currentPlaylist={this.state.currentPlaylist}
      currentUser={this.state.currentUser}
      setCurrentPlaylist={this.setCurrentPlaylist} />)
    return (
      <Router>
        <div>
          <NavBar currentUser={this.state.currentUser} userLoggedIn={this.state.userLoggedIn} signOut={this.signOut} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signUp" render={SignUpLogInComponent} />
            <Route exact path="/search/:searchItem" component={Search} />
            <Route exact path="/album/:albumId" render={routeProps => <Album {...routeProps}
              currentUser={this.state.currentUser}
              currentPlaylist={this.state.currentPlaylist}
              userLoggedIn={this.state.userLoggedIn} />} />
            <Route exact path="/product/:productId" component={Product} />
            <Route exact path="/login" render={LogInComponent} />
            <Route exact path="/user/:userId" render={UserPageComponent} />
          </Switch>
          {this.state.userLoggedIn ? <Redirect to="/" /> : <Redirect to="/signUp" />}
        </div>
      </Router>
    );
  }
}

export default App;
