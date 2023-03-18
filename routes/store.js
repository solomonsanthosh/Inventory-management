const router = require("express").Router();

const { postStore } = require("../controllers/ticket.controller");
const { Store, Warehouse } = require("../database/database");

router.get("/allproducts/:location", async (req, res) => {
  const { location } = req.params;

  try {
    if (location == "local") {
      const allProducts = await Store.findAll();
      res.json(allProducts);
    } else {
      const allProducts = await Warehouse.findAll();
      res.json(allProducts);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get(`/postStore/:product_id`, postStore);

router.post("/storecreate", async (req, res) => {
  try {
    const bulkProducts = [
      {
        product_id: "bf326b20-9fa0-4be3-8065-113a19573356",
        product_quantity: 1000,
        product_part_no: "b_max_ball_pen",
        requestFrom: "user",
        product_limit: 1000,
      },
      {
        product_id: "7e1211b6-a7c5-4ec2-81f6-274f968bc029",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,
        product_part_no: "single_punch_kangaro_FP",
      },
      {
        product_id: "18bfa983-c0e3-43f1-ac64-c2d69863d131",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,

        product_part_no: "double_punch_kangaro",
      },
      {
        product_id: "42fc0047-75a5-4e54-99da-08ba36778dd0",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,

        product_part_no: "scissors",
      },
      {
        product_id: "54947c93-008b-46c9-ae6b-44734bf973e3",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,

        product_part_no: "glue_stick",
      },
      {
        product_id: "a28b8091-123f-4718-ba94-bf9bea213cd9",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,

        product_part_no: "spring_file",
      },
      {
        product_id: "93871da7-b8b2-4e7e-a77a-64b11f275e09	",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,
        product_part_no: "box_file",
      },
    ];
    await Store.bulkCreate(bulkProducts).then((response) => {
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/showstore", async (req, res) => {
  try {
    const store = await Store.findAll();
    res.json(store);
    console.log(store);
  } catch (error) {
    console.log(error);
  }
});

// warehouse
router.post("/warehousecreate", async (req, res) => {
  try {
    const bulkProducts = [
      {
        product_id: "bf326b20-9fa0-4be3-8065-113a19573356",
        product_quantity: 1000,
        product_part_no: "b_max_ball_pen",
        requestFrom: "user",
        product_limit: 1000,
      },
      {
        product_id: "7e1211b6-a7c5-4ec2-81f6-274f968bc029",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,
        product_part_no: "single_punch_kangaro_FP",
      },
      {
        product_id: "18bfa983-c0e3-43f1-ac64-c2d69863d131",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,

        product_part_no: "double_punch_kangaro",
      },
      {
        product_id: "42fc0047-75a5-4e54-99da-08ba36778dd0",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,

        product_part_no: "scissors",
      },
      {
        product_id: "54947c93-008b-46c9-ae6b-44734bf973e3",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,

        product_part_no: "glue_stick",
      },
      {
        product_id: "a28b8091-123f-4718-ba94-bf9bea213cd9",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,

        product_part_no: "spring_file",
      },
      {
        product_id: "93871da7-b8b2-4e7e-a77a-64b11f275e09	",
        product_quantity: 1000,

        requestFrom: "user",
        product_limit: 1000,
        product_part_no: "box_file",
      },
    ];
    await Warehouse.bulkCreate(bulkProducts).then((response) => {
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/showwarehouse", async (req, res) => {
  try {
    const warehouse = await Warehouse.findAll();
    res.json(warehouse);
    console.log(warehouse);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
