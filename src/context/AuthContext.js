import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = { isAuth: false };

  //   arrow function binds method
  toggleAuth = () => {
    console.log(this.state.isAuth);
    this.setState({ isAuth: !this.state.isAuth });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
