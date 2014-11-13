module.exports = function(sequelize, DataTypes) {
  return sequelize.define("cd", {
    cd_name: DataTypes.STRING
    });
};