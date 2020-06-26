const EventHistory = require('../models/EventsHistory')
const User = require('../models/Users')
const moment = require('moment');
const { raw } = require('body-parser');

module.exports = {
    async getEvents(req, res){
        try {
            const {UserId} = req.params;

            const dataFound = await User.findByPk(UserId, {
            include: { association : 'histories'}
            }, {raw: true}).then((x) => {
                console.log(x.get({ plain: true}))
            })

            return res.json({dataFound})

        } catch (error) {
            return res.json({error})
        }
    },
    async cadastrarEvento(req, res){
        try {
            const {UserId} = req.body;
            const {OshiStatus, GPUStatus} = req.body;
            const x = await EventHistory.create({
            UserId: UserId, OshiStatus: OshiStatus, GPUStatus: GPUStatus
        })

        return res.send({x})

        } catch (error) {
            return res.send({error})
        }
    },
    async getAllUser(req, res){
        
        const x = await User.findAll();
        const y = await EventHistory.findAll();

        res.status(200).send({message: "Done", pessoas: x, eventos: y});
    }
}