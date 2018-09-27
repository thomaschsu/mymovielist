import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import MovieNav from "./components/MovieNav";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Wrapper>
          <Jumbotron>
            <h1 class="jumbo-small">Organize, Discuss, Discover</h1>
            <h1 class="jumbo-title">MyMovieList</h1>
            <h1 class="jumbo-small">HOW MANY MOVIES HAVE YOU SEEN?</h1>
            </Jumbotron>
        <MovieNav></MovieNav>
      </Wrapper>
      
    </div>
  </Router>
);

export default App;
