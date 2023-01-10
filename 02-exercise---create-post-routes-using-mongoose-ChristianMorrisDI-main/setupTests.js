const mongoose = require("mongoose");

const { MongoMemoryServer } = require("mongodb-memory-server");

let instance;

beforeAll(async () => {
  instance = await MongoMemoryServer.create();
  await mongoose.connect(instance.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await instance.stop();
});
