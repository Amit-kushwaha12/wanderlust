const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  const newData = initData.data.map((obj) => ({
    ...obj,
    owner: "690983cb16405cb0291c1853"
  }));
6
  await Listing.insertMany(newData);
  console.log("Data initialized");
};

initDB();
