module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define("warehouse", {
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
  //   Warehouse.sync({ force: true })
  //     .then(() => console.log("Warehouse MODEL CREATED"))
  //     .catch((err) => console.log("ERROR " + err));
  return Warehouse;
};
