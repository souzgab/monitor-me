const {
	Model,
	DataTypes
} = require('sequelize')
const bcrypt = require("bcryptjs");

class monitor_users extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			whatsapp: DataTypes.STRING,
			password: DataTypes.STRING
		},{
			hooks: {
				beforeCreate: async users => {
					const hashedPassword = await bcrypt.hash(users.password, 10);
					users.password = hashedPassword;
				}
			}
			,sequelize: sequelize
		})
	}
	static associate(models) {
		this.hasMany(models.event_hardwares, {
			foreignKey: 'UserId',
			as: 'hardwares'
		})
	}
}

module.exports = monitor_users;


// module.exports = (sequelize, DataTypes) => {
//     let Usuario = sequelize.define('Usuario',{
// 		iduser: {
// 			field: 'IDUSER',
// 			type: DataTypes.INTEGER,
// 			primaryKey: true,
// 			autoIncrement: true
// 		},		
// 		loginuser: {
// 			field: 'LOGINUSER',
// 			type: DataTypes.STRING,
// 			allowNull: false
// 		},
// 		senha: {
// 			field: 'SENHA',
// 			type: DataTypes.STRING,
// 			allowNull: false
// 		},
// 		nome: {
// 			field: 'NOME',
// 			type: DataTypes.STRING,
// 			allowNull: false
// 		},
// 		email: {
// 			field: 'EMAIL',
// 			type: DataTypes.STRING,
// 			allowNull: false
// 		},
// 		telefone: {
// 			field: 'TELEFONE',
// 			type: DataTypes.STRING,
// 			allowNull: false
// 		}
// 	}, 
// 	{
// 		tableName: 'USUARIO', 
// 		freezeTableName: true, 
// 		underscored: true,
// 		timestamps: false,
// 	});

//     return Usuario;
// };