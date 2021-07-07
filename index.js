const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const apiIndex = require('./routes/index');

app.use(bodyParser.json());

// Enable Cross-origin resource sharing
app.use(cors());

// Enable routes
app.use('/api', apiIndex )

app.listen(3000, () => console.log(`Server started at port : 3000`));
