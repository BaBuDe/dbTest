// if (!global.hasOwnProperty('models')) {
  var Sequelize = require('sequelize');

  // if (process.env.DATABASE_URL) {
    var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

    var sequelize = new Sequelize(match[5], match[1], match[2], {
      dialect: 'postgres',
      protocol: 'postgres',
      port: match[4],
      host: match[3],
      // logging: true
    });

    var models = [
    'cd'
    ];

    models.forEach(function(model) {
      module.exports[model] = sequelize.import('./' + model);
    });

  // };
  // } else {
  //   sequelize = new Sequelize('local-sample', 'root', null)
  // }

  // global.models = {
  //   Sequelize: Sequelize,
  //   sequelize: sequelize,
  // };

// };

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;