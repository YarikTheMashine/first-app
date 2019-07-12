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
import RandomRating from "./components/RandomRating";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RandomRating />
      <div style={{ marginTop: "40px" }}>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/:id" component={DetailPage} />
          <Route exact component={ErrorPage} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
