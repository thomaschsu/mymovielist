import axios from "axios";

export default {
	search: title => {
		return axios.get(`http://www.omdbapi.com/?apikey=d546d0cf&s=${title}`);
	}
}