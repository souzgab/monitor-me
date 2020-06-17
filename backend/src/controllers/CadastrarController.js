const User = require('../models/Users')

const gnt = require('../validators/generateToken');

module.exports = {
    async cadastrar(req, res) {
        
        const {email} = req.body;
        const {name,whatsapp,password} = req.body
        try {
            if (await User.findOne({where:{email: email}})){
                return res.status(400).send({error: 'Usuário já existe'})
            }else{
                const user = await User.create({name,email,whatsapp,password})
                return res.json({user, token: gnt.generateJwt({id : user.id})})
            }
        } catch (err) {
            return res.status(400).send({
                error: 'Cadastro Falhou'
            });
        }
    }
}