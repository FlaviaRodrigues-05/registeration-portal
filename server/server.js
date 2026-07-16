const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const registerRoute = require("./routes/register");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/register", registerRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on ${PORT}`);
});