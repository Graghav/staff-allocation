var db = require('../models');
var content = require('../settings');

exports.render = function(req,res) {
	res.render('home',content.settings);
};

exports.sendStaffJSON = function(req,res) {

	var samp = [
	{
		"id"   : 1,
		"name" : "Dr.B.Latha",
		"dept" : "CSE",
		"designation": "H.O.D"
	},

	{
		"id"   : 2,
		"name" : "R.Uma",
		"dept" : "CSE",
		"designation": "Asst.Prof-I"

	},

	{
		"id"   : 3,
		"name" : "R.Jayaselvi",
		"dept" : "CSE",
		"designation": "Asst.Prof-I"

	}

];

	res.send(JSON.stringify(samp));

};