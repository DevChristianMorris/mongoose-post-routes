const express = require("express");
const app = express();
const WishlistModel = require("./models/WishlistModel");
const OrderModel = require("./models/OrderModel");
const PolicyModel = require("./models/PolicyModel");

app.use(express.json());

app.get("/wishlists/:id", async (req, res) => {
  const { id } = req.params;
  const wishlist = await WishlistModel.findById(id);
  return res.status(200).send(wishlist);
});

app.get("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const order = await OrderModel.findById(id);
  return res.status(200).send(order);
});

app.get("/policies/:id", async (req, res) => {
  const { id } = req.params;
  const order = await PolicyModel.findById(id);
  return res.status(200).send(order);
});

app.post("/wishlists", async (request, response) => {
  const { body } = request;
  const wishlist = new WishlistModel(body);
  await wishlist.save();
  return response.status(200).send(wishlist);
});

app.post("/orders", async (request, response) => {
  const { body } = request;
  const order = new OrderModel(body);
  await order.save();
  return response.status(200).send(order);
});

app.post("/policies", async (request, response) => {
  const { body } = request;
  const policy = new PolicyModel(body);
  await policy.save();
  return response.status(200).send(policy);
});

module.exports = app;
