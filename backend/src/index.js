require('./database')
const express = require('express'); 
const app = express(); //recebe modulo Express
const cors = require('cors');
const routes = require('./routes'); // recebe arquivo de rota
const systemRoutes = require('./controllers/SistemaRoutes'); // recebe arquivo de rota

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(systemRoutes);


//LocalHost que está escutando
app.listen(3333);