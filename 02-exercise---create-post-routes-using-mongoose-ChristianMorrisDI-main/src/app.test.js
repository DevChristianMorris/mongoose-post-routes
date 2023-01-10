const request = require("supertest");
const mongoose = require("mongoose");
const app = require("./app");

describe("app", () => {
  it("should create a wishlist", async () => {
    const body = {
      productId: "614abf0a93e8e80ace792ac6",
    };

    let id;

    await request(app)
      .post("/wishlists")
      .send(body)
      .set("Accept", "application/json")
      .expect(200)
      .expect((res) => {
        id = res.body.id;
        expect(res.body).toEqual(expect.objectContaining(body));
        expect(id).toBeTruthy();
        const isValidId = mongoose.Types.ObjectId.isValid(res.body.id);
        expect(isValidId).toEqual(true);
      });

    // check the new document is created by retrieving it
    await request(app)
      .get(`/wishlists/${id}`)
      .expect(200)
      .expect((res) => {
        const expected = {
          id,
          ...body,
        };
        expect(res.body).toEqual(expected);
      });
  });

  it("should create an order", async () => {
    const body = {
      groceries: [
        {
          id: "615915303a9ea9532717f95f",
          qty: 2,
        },
        {
          id: "6159153639d0db80bed5ec74",
          qty: 1,
        },
      ],
    };

    let id;

    await request(app)
      .post("/orders")
      .send(body)
      .set("Accept", "application/json")
      .expect(200)
      .expect((res) => {
        id = res.body.id;
        expect(res.body).toEqual(expect.objectContaining(body));
        expect(id).toBeTruthy();
        const isValidId = mongoose.Types.ObjectId.isValid(res.body.id);
        expect(isValidId).toEqual(true);
      });

    // check the new document is created by retrieving it
    await request(app)
      .get(`/orders/${id}`)
      .expect(200)
      .expect((res) => {
        const expected = {
          id,
          ...body,
        };
        expect(res.body).toEqual(expected);
      });
  });

  it("should create a policy", async () => {
    const body = {
      planType: "Full",
      petsName: "Rex",
      customersName: "Mary Poppins",
      expiry: "2023-03-09T11:00:00.000Z",
    };

    let id;

    await request(app)
      .post("/policies")
      .send(body)
      .set("Accept", "application/json")
      .expect(200)
      .expect((res) => {
        id = res.body.id;
        expect(res.body).toEqual(expect.objectContaining(body));
        expect(id).toBeTruthy();
        const isValidId = mongoose.Types.ObjectId.isValid(res.body.id);
        expect(isValidId).toEqual(true);
      });

    // check the new document is created by retrieving it
    await request(app)
      .get(`/policies/${id}`)
      .expect(200)
      .expect((res) => {
        const expected = {
          id,
          ...body,
        };
        expect(res.body).toEqual(expected);
      });
  });
});
