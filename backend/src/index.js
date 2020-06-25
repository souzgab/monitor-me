require('./database')
const express = require('express'); 
const app = express(); //recebe modulo Express
const cors = require('cors');
const routes = require('./routes'); // recebe arquivo de rota
const reqLog = require('./middlewares/logger')
const dotenv = require('dotenv');


dotenv.config()
app.use(reqLog)
app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {`Listening at Port ${PORT}`});