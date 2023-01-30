module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define("store", {
    product_id: {
      type: DataTypes.STRING,
      // primaryKey: true,
      allowNull: false,
    },
    product_part_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_limit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  // Store.sync({ force: true })
  //   .then(() => console.log("Store MODEL CREATED"))
  //   .catch((err) => console.log("ERROR " + err));
  return Store;
};
