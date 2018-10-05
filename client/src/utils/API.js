import axios from "axios";

export default {
	search: title => {
		return axios.get(`http://www.omdbapi.com/?apikey=d546d0cf&s=${title}`);
	},
	getMovies: function(user) {
		return axios.get(`/api/movies/${user}`);
	}
}