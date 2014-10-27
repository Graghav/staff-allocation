var db = require('../models');
var content = require('../settings');

exports.render = function(req,res) {
	/**
	 * Render the home page with the user settings from `settings.js`
	 */
	res.render('home',content.settings);
};

exports.sendStaffJSON = function(req,res) {

	 /**
	  * 
	  * Sample JSON format for TypeAhead at Client
	  [
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

	  ]

	  */

	 
	var data = [];

	// Query the DB to retrieve the staff information
	db.sequelize.query("SELECT staff_id_no as id, staff_name as name, staff_department as dept, staff_designation as designation FROM Staffs ", null, { raw: true }, null )
		.success(function(result){
			data.push(result);
									
	});

	res.send(JSON.stringify(data));

};