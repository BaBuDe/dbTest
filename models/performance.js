module.exports = function(sequelize, DataTypes) {
  var performance = sequelize.define('performance', {
    performance_setting: DataTypes.STRING
  },{underscored: true});
  return performance;
};