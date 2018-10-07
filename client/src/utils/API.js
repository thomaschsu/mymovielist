import axios from "axios";

export default {
	search: (title, page) => {
		return axios.get(`http://www.omdbapi.com/?apikey=d546d0cf&s=${title}&type=movie&page=${page}`);
	},
	searchOne: id => {
		return axios.get(`http://www.omdbapi.com/?apikey=d546d0cf&i=${id}`);
	},
	getMovies: function(user) {
		return axios.get(`/api/movies/${user}`);
	},
	addMovie: function(user, movie) {
		return axios.post(`/api/movies/${user}`, movie);
	},
	updateMovie: function(user, movie, type, value) {
		return axios.put(`/api/movies/${user}`, {movie: movie, type: type, value: value});
	},
	removeMovie: function(user, movie) {
		return axios.put(`/api/movies/${user}`, {movie: movie, type: "remove"});
	}
}