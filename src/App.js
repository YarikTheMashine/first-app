import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Articles from "./components/Articles";
import DetailPage from "./components/DetailPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import About from "./components/About";

const cookies = new Cookies();

class App extends React.Component {
  state = {
    isLogin: false
  };

  loginHandler = () => {
    if (this.state.isLogin) {
      cookies.remove("isLogin");
    }
    this.setState(state => ({
      isLogin: !state.isLogin
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <Header loginToggler={this.loginHandler} />
        <div style={{ marginTop: "40px" }}>
          <Switch>
            <Route exact path="/first-app" component={Content} />
            <Route
              path="/login"
              component={props => (
                <Auth {...props} loginHandler={this.loginHandler} />
              )}
              exact
            />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/articles/:id" component={DetailPage} />
            <Route exact path="/about" component={About} />
            <Route exact component={ErrorPage} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
