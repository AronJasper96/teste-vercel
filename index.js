import 'dotenv/config';
var express = require('express');
var indexRouter = require('./routes/root');
var app = express();
const swaggerUI = require('swagger-ui-express');

const swaggerDocument = require('./utils/swagger/swagger.json');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);


app.listen(3000, function () {
  console.log('Escutando na porta 3000!');
});

module.exports = app;