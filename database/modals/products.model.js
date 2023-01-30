module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("products", {
    product_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_part_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // Products.sync({ force: true })
  //   .then(() => console.log("Products MODEL CREATED"))
  //   .catch((err) => console.log("ERROR " + err));
  return Products;
};
