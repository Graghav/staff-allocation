module.exports = function(sequelize, DataTypes) {

  var Invigilation = sequelize.define('Invigilation', {
    staff_name: { type: DataTypes.STRING },
    staff_initials: { type: DataTypes.STRING },
    staff_designation: { type: DataTypes.STRING },
    staff_department: { type: DataTypes.STRING },
    staff_id_no: { type: DataTypes.STRING },
    staff_mobile: { type: DataTypes.STRING },
    slots: { type: DataTypes.STRING },
    preference: { type: DataTypes.STRING }    
  })
  
  return Invigilation
}