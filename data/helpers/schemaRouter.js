const express = require("express");

const Schemes = require("./schemaModel.js");

const Router = express.Router();

Router.get("/:id/shoppingList", (req, res) => {
  const id = req.params.id;

  Schemes.getShoppingList(id)
    .then((scheme) => {
      res.status(200).json(scheme);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error getting the shopping cart",
      });
    });
});

module.exports = Router;
