const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const helmet = require('helmet');
const morgan = require('morgan');

const userRoute = require('./Routes/V1/user.route');
const postRoute = require('./Routes/V1/post.route');

const port = process.env.PORT || 5000;
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// CONNECT MONGOOSE
mongoose
	.connect(
		`mongodb+srv://socialink:${process.env.DB_PASS}@cluster0.1hhxq9h.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => console.log('SOCIALINK Database Connected Successfully!'))
	.catch((err) => console.log(err));

// MADDILWARE
app.use(cors());
app.use(express.json());

// CALL ROUTE
app.use('/api/v1', userRoute);
app.use('/api/v1', postRoute);

app.get('/', (req, res) => {
	res.send('<h1>How are you?</h1>');
});

app.use('*', (req, res) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
});

app.listen(port, () => {
	console.log(`SOCIALINK Server Running on Port: ${port}`);
});
