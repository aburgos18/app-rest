const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
require('dotenv/config');

const cors = require('cors');

const bodyParser = require('body-parser');

//import de rutas
const postsRoute = require('./routes/posts');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);



//ROUTES
app.get("/", (req, res) => {
	res.send("Estamos en home");
});

//Conectarsse a la base de datos
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Conectado a la base de datos");
	}
);

app.listen(port, () => {
	console.log(`app escuchando por http://localhost:${port}`);
});
