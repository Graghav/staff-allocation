#!/usr/bin/env node

/**
 * Bootloader for the app
 * @author: Raghav
 * @version: 0.1
 *
 */

var express        = require('express');
var path           = require('path');
var exphbs         = require('express3-handlebars');
var fs             = require('fs');
var app            = express();
var db             = require('./models');
var config		     = require('./config');
var handlebars 	   = require('handlebars');


app.set('port', config.settings.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('json spaces', 2);

var hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  handlebars: handlebars
});

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

var bodyParser = require('body-parser');
app.use(bodyParser());

var route = require('./url')(express, app);

//Set up the Error Pages
app.use(function(req, res, next){
    res.status(404).render('404', { title: 'Page Not Found' });
});

db
  .sequelize
  .sync({force: true})
  .complete(function(err){
    if(err){
      throw err;
    } else {
      //Create the Server instance
      app.listen(app.get('port'), function(){
        console.log('Zurp Express server listening on port '+ app.get('port'));
        
      });
    }
  });





