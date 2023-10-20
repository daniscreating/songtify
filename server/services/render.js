const axios = require('axios')

exports.homeRoutes = (req, res) => { 
	// Realizar una get quest a api/songs
	axios.get('http://localhost:3000/api/songs')
	 .then(function(response) {
		res.render('index', { songs: response.data})
	 })
	 .catch(err => {
		res.send(err);
	 })
}

exports.addSong = (req, res) => {
	res.render('add-song');
}

exports.updateSong = (req, res) => {
	axios.get('http://localhost:3000/api/songs',  { params : { id : req.query.id }})
		.then(function(songdata){
			res.render("update-song", { song : songdata.data})
		})
		.catch(err =>{
			res.send(err);
		})
}