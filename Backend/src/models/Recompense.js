const { Model, DataTypes } = require('sequelize');

class Recompense extends Model {
  static init(connection) {
    super.init({
        description: DataTypes.STRING,
    }, {
        sequelize: connection,
    })
  }
}

module.exports = Recompense;