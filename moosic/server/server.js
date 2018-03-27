'use strict';

/** Module dependencies. */
const express      = require('express');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const routes       = require('./routes');

const port = process.env.PORT || 3001;

// configure the express server
const app = express();

app.set('port', port);
app.use(logger('dev'))
  .use(cookieParser())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use('/', routes);

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});