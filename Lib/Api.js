// import axios from 'axios';
var axios = require("axios")

exports.fetchTweets = function() {
	axios.get('https://safe-headland-90182.herokuapp.com/')
		.then(function(response) {
			console.log(response.data);
			console.log(response.status);
			return response.data
		});
}

