console.clear();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// register routes
const routes = require('./routes');
const router = routes(express.Router());
app.use(router);

// error handling
const { handle404s, errorHandler } = require('./errorHandling');
app.use(handle404s);
app.use(errorHandler);

app.listen(4000, () => console.log('Lab 3 up and running on 4000!!!'));
