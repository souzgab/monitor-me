const Hardwares = require('../models/EventsHardware')
const EventHistory = require('../models/EventsHistory')
const User = require('../models/Users')
const moment = require('moment')

module.exports = {
    async myHardware(req, res){
        // const usuarioLogado = req.headers.authorization;
        // console.log('teste>',usuarioLogado)
        const {UserId} = req.params;
        // const UserId = req.headers.authorization;

        console.log(UserId)
        const user = await User.findByPk(UserId, {
            include: { association : 'hardwares'}
        })
        res.json(user)
        const AllHardwares = await Hardwares.findAll({
            where:{
                UserId: UserId
            }
        })
        return res.json(
            AllHardwares
        )
    },
    async consultHardHistory(req,res){
        // Consulta Hardwares do User
        const {hardId} = req.params;
        const AllHardwares = await Hardwares.findByPk(hardId,{
            include: { association : 'histories'}
        })
        console.log('AllHard',JSON.stringify(AllHardwares))
        res.json(
            AllHardwares
        )
        // Consulta Histórico de Eventos referente ao Hardware   
        const AllEvents = await EventHistory.findAll({
            where:{
                hardId: hardId
            }
        })
        return res.json(
            AllEvents
        )
    },
    async createHardUser(req, res){
        const {modelo, memoryRam, GPU, hardDisk } = req.body;
        const {UserId} = req.params;
        console.log(UserId)
        const consult = await User.findByPk(UserId)
        // console.log(consult)
        if(!consult){
            return res.status(400).json({error: 'Usuário não encontrado'})
        }
        const dadosHardware = await Hardwares.create({modelo, memoryRam, GPU, hardDisk, UserId})
        console.log(JSON.stringify(dadosHardware))
        return res.json(
            dadosHardware
        )
    },
    async createEvent(req, res){
        const {hardId, memoryRamReg, GPUReg, hardDiskReg} = req.body
        const createHistory = await EventHistory.create({hardId, memoryRamReg, GPUReg, hardDiskReg})
        // console.log(JSON.stringify(createHistory))
        return res.json(
            createHistory
        )
    },
    async consultAllH(req,res){
        const {modelo, memoryRam, GPU, hardDisk } = req.body;
        const {UserId} = req.params;

        const createAllH = await Hardwares.findAll(modelo, memoryRam, GPU, hardDisk, {
            where:{
                UserId: UserId
            }
        })

        return res.json(
            createAllH
        )
    },
    async consultHbyId(req,res){
        // const {modelo, memoryRam, GPU, hardDisk } = req.body;
        const {id} = req.params;

        const createAllH = await Hardwares.findByPk(id)

        return res.json(
            createAllH
        )
    },
    async atualizaHardware(req,res){
        
        const {modelo, memoryRam, GPU, hardDisk } = req.body;
        const {id} = req.params;

        console.log(modelo, memoryRam, GPU, hardDisk, id)

        const updateById = await Hardwares.update({modelo, memoryRam, GPU, hardDisk} , {
            where: {
                id: id
            }
        })

        // console.log(JSON.stringify(updateById))

        return res.json(
            updateById
        )
    }
}




















// user.forEach(o => {
        //     // console.log(JSON.stringify(o))   

        //     let {name, email, create, upd} =
        //     {
        //         name: o.name,
        //         email: o.email,
        //         create: o.createdAt,
        //         upd: o.updatedAt
        //     }
        //     upd = moment(upd).locale('pt-br').format('DD/MM/YYYY, h:mm:ss a')
        //     create = moment(create).locale('pt-br').format('DD/MM/YYYY, h:mm:ss a')

        //     console.log(`nome: ${name}, email: ${email}, create: ${create}, upd: ${upd}`)
        // });
        