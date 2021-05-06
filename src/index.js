import express from "express";
import cors from "cors";
require("dotenv/config");

import routes from "./routes";
import auth from "./middlewares/auth";

const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());

app.use("/api/v1/mailer", auth, routes);

app.listen(process.env.PORT, () => {
  console.log(`Mailer-API is running on PORT ${process.env.PORT}`);
});
