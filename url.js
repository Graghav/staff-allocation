var routes       = require('./routes');

module.exports = function(express, app) {

	var _index = express.Router();
	_index.get('/',routes.home);
	_index.get('/api/staff',routes.staffAutocomplete);
	app.use('/',_index);

};