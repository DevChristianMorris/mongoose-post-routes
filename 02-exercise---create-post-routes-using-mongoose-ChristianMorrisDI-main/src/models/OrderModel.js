const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    groceries: [
      {
        id: { type: String, required: true },
        qty: { type: Number, required: true },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;

        for (const groceryItem of ret.groceries) {
          delete groceryItem._id;
        }
      },
    },
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
