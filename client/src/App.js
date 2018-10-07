import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MovieList from "./pages/MovieList";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Footer from "./components/Footer";

const App = () => (
	<Router>
		<div>
			<Nav />
				<Route exact path="/" component={Home} />
				<Route path="/movielist" component={MovieList} />
				<Route exact path="/search" component={Search} />
			<Footer />
		</div>
	</Router>
);

export default App;