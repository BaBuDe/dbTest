module.exports = function(sequelize, DataTypes) {
  var soloist = sequelize.define('soloist', {
    soloist_type: DataTypes.STRING
  },{underscored: true});
  return soloist;
};