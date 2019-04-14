module.exports = function(sequelize, DataTypes) {
    var Facility = sequelize.define("Facility", {
      facilityid: DataTypes.STRING,
      facilityname:DataTypes.STRING,
      facilityactive: DataTypes.BOOLEAN
    });
    return Facility;
  };
  