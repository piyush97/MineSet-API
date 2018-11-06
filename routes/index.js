var express = require('express');
var router = express.Router();
var waterData = require('../datasets/water.js');
var airQualityData = require('../datasets/airquality.js');

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

// API WaterData
router.get('/waterData', function (req, res) {
	res.json(
		waterData
	);
});

// API AirQualityData
router.get('/airQualityData', function (req, res) {
	res.json(
		airQualityData
	);
});

module.exports = router;
