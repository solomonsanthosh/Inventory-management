module.exports = (sequelize, DataTypes) => {
  const Suggestion = sequelize.define("suggestion", {
    company_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_part_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: { len: [6] },
    },
  });
  //   Suggestion.sync({ force: true })
  //     .then(() => console.log("Suggestion MODEL CREATED"))

  // .catch((err) => console.log("ERROR " + err));
  return Suggestion;
};
