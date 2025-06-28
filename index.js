require("dotenv").config();
const express = require("express");

const { allslots, availableSlots } = require("./utils");

const app = express();

app.use(express.json());

app.get("/allslots", (req, res) => {
  let resp = allslots.map((slot) => slot.start + " - " + slot.end).join(", ");
  res.status(200).json(resp);
});

app.post("/availableEvents", async (req, res) => {
  const { data } = req.body;
  const response = availableSlots(data);
  res.status(200).json(response);
});

app.listen(process.env.PORT || 8080, async () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
