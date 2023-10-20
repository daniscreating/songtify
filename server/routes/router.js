const express = require('express');
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')

/**
 * @description Root Route
 * @method GET 
 */ 
route.get('/', services.homeRoutes);

/**
 * @description add songs
 * @method GET /add-song
 */
route.get('/add-song', services.addSong);

/**
 * @description update songs
 * @method GET /update-song
 */
route.get('/update-song', services.updateSong)

// API
route.post('/api/songs', controller.create)
route.get('/api/songs', controller.find)
route.put('/api/songs/:id', controller.update)
route.delete('/api/songs/:id', controller.delete)


module.exports = route;