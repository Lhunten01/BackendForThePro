import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
const PORT=process.env.PORT||3001;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
   "mongodb+srv://shopingtenzin:mypassword@recipe.hcmfwty.mongodb.net/"
 );
try {
  await mongoose.connect("mongodb+srv://shopingtenzin:mypassword@recipe.hcmfwty.mongodb.net/");
} catch (error) {
  console.log(error);
}

// mongoose.connect('mongodb://127.0.0.1:27017/recipe');

app.listen(PORT, () => console.log("Server started"));