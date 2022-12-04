const router = require("express").Router();

const model = require("../model/model.js");

router.post("/api/item", async (req, res) => {
  try {
    const newItem = new model({
      item: req.body.item,
    });
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (error) {
    console.log(error);
  }
});

router.get("/api/items", async (req, res) => {
  try {
    const saveItem = await model.find({});
    console.log(saveItem);
    res.status(200).json(saveItem);
  } catch (error) {
    console.log(error);
  }
});

router.put("/api/items/:id", async (req, res) => {
  try {
    const updateItem = await model.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateItem);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/api/items/:id", async (req, res) => {
  try {
    const updateItem = await model.findByIdAndDelete(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("item deleted");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
