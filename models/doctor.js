module.exports = function(sequelize, DataTypes) {
  var Doctor = sequelize.define("Doctor", {
    firstname: DataTypes.STRING,
    lastname:DataTypes.STRING,
    lead: DataTypes.BOOLEAN,
    licenceno:{ type:DataTypes.STRING, unique: true}
  });
  return Doctor;
};
