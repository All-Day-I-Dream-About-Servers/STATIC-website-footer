const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../public')));
app.listen(port, () => console.log(`Server is listening on port ${port}`));
