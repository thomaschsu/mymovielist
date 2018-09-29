import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import MovieList from "./pages/MovieList";
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => (

	<Router>
		<div>
			<Nav />
			<Wrapper>
				<Route exact path="/" component={Home} />
				<Route exact path="/movielist" component={MovieList} />
				<Route exact path="/search" component={Search} />
			</Wrapper>
		</div>
	</Router>
);

export default App;