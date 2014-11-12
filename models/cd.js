module.exports = function(sequelize, DataTypes) {
  return sequelize.define("CD", {
    cd_name: DataTypes.VARCHAR
    });
};