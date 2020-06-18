require('./database')
const express = require('express'); 
const app = express(); //recebe modulo Express
const cors = require('cors');
const routes = require('./routes'); // recebe arquivo de rota
const systemRoutes = require('./controllers/SistemaRoutes'); // recebe arquivo de rota
const reqLog = require('./middlewares/logger')
const dotenv = require('dotenv');

console.log(process.env.USER)

dotenv.config()
app.use(reqLog)
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(systemRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {`Listening at Port ${PORT}`});