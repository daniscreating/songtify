var Songdb = require('../model/model');

// Crear y guardar una nueva cancion
exports.create = (req, res) => {
	// Validar la request
	if(!req.body){
		res.status(400).send({ message: 'El contenido no puede estar vacio'});
		return;
	}

	// Nueva cancion
	const song = new Songdb({
		name: req.body.name,
		artist: req.body.artist,
		album: req.body.album,
		year: req.body.year
	})

	// Guardar cancion en la base de datos
	song
	 .save(song)
	 .then(data => {
		// res.send(data);
		res.redirect('/add-song')

	 })
	 .catch(err => {
		res.status(500).send({
			message: err.message || "Ocurrio un error meintras se creaba la operacion"
		})
	 })
}

// Recuperar y devolver todas las canciones / recuperar y devolver una sola cancion
exports.find = (req, res) =>{

	if(req.query.id){
		const id = req.query.id;

		Songdb.findById(id)
		 .then(data => {
			if(!data){
				res.tatus(404).send({message: `No se encontro la cancion con el id ${id}.`})
			} else {
				res.send(data)
			}
		})
		.catch(err => {
			res.status(505).send({message: 'Hubo un error al recuperar la cancion con el id:' + id})
		});
		

	} else {
		Songdb.find()
		.then(song => {
			res.send(song)
		})
		.catch(err => {
			res.status(500).send({message: err.message || 'Ocurrio un error mientras se intentaba recuperar la informacion'})
		})
	}

	
}

// Actualizar una nueva cancion mediante el ID
exports.update = (req, res) => {
	if(!req.body){
		return res
		.status(400)
		.send({message: 'Los datos a actualizar no pueden estar vacios'})
	}

	const id = req.params.id;
	Songdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
	.then(data => {
		if(!data){
			res.tatus(404).send({message: `No se puede actualizar la cancion sin ${id}. Quiza la cancion no se encuentra.`})
		} else {
			res.send(data)
		}
	})
	.catch(err => {
		res.status(500).send({message: 'Error al actualizar la información de la cancion'})
	})
}

// Eliminar una cancion con un ID especifico
exports.delete = (req, res) =>{
	const id =  req.params.id;

	Songdb.findByIdAndDelete(id)
	.then(data => {
		if(!data){
			res.status(404).send({ message : `No se pudo eliminar la cancion con el id ${id}. Puede que el id sea incorrecto`})
		}else{
			res.send({
				message : "La cancion ha sido eliminada con exito!"
			})
		}
	})
	.catch(err =>{
		res.status(500).send({
			message: "No se pudo eliminar la cancion con el id=" + id
		});
	});
}