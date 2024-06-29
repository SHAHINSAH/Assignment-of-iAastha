const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (sometime localhost is not working that's why i used 127.0.0.1)
mongoose.connect('mongodb://127.0.0.1:27017/notes', { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.use('/', noteRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
