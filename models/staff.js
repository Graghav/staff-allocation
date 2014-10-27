module.exports = function(sequelize, DataTypes) {

  var Staff = sequelize.define('Staff', {
    staff_name: { type: DataTypes.STRING },
    staff_initials: { type: DataTypes.STRING },
    staff_designation: { type: DataTypes.STRING },
    staff_department: { type: DataTypes.STRING },
    staff_id_no: { type: DataTypes.STRING }    
  })
  
  return Staff
}