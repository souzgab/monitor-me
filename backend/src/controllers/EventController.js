const EventHistory = require('../models/EventsHistory')
const User = require('../models/Users')
const moment = require('moment');

module.exports = {
    async getEvents(req, res){
        const {UserId} = req.params;

        const user = await User.findByPk(UserId, {
            include: { association : 'histories'}
        })
        
        const AllEventHistory = await EventHistory.findAll({
            where:{
                UserId: UserId
            }
        })
        return res.json({user}
            
        )
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