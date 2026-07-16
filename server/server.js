const express = require("express");
const cors = require("cors");
require("dotenv").config();
console.log("Spreadsheet ID:", process.env.SPREADSHEET_ID);
console.log("Email User:", process.env.EMAIL_USER);

const registerRoute = require("./routes/register");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/register", registerRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on ${PORT}`);
});