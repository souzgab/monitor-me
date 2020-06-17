const Sequelize = require('sequelize');
const dbconfig = require('../config/database')
const Users = require('../models/Users');
const EventsHardware = require('../models/EventsHardware');
const EventsHistory = require('../models/EventsHistory')

const connection = new Sequelize(dbconfig)

Users.init(connection)
EventsHardware.init(connection)
EventsHistory.init(connection)

Users.associate(connection.models)
EventsHardware.associate(connection.models)
EventsHistory.associate(connection.models)


module.exports = connection;