const { Model, DataTypes } = require('sequelize')

class tbl_HardHistories extends Model{
	static init(sequelize){
		super.init({
			UserId: DataTypes.INTEGER,
			OshiStatus: DataTypes.JSON,
			GPUStatus: DataTypes.JSON,
			CpuStatus: DataTypes.JSON,
		}, {
			sequelize
		})
	}
	static associate(models){
		this.belongsTo(models.tbl_Users, { foreignKey: 'UserId', as: 'Users'})
	}
}

module.exports = tbl_HardHistories;