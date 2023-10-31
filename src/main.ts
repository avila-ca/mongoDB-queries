import dotenv from "dotenv";
import mongoose from "mongoose";
import fs from "node:fs/promises";

dotenv.config();

const restaurantFile = fs.readFile("restaurants/restaurants.json", 'utf-8');

const restauranteSchema = new mongoose.Schema(restaurantFile);
const nameDB = process.env.DATABASE ?? "error";
const urlDB = process.env.MONGO_URI ?? "error";
const dbConnection = mongoose
	.connect(urlDB)
	.then(() => console.log(`${nameDB} database connected!`));

const restaurantes = mongoose.model("Restaurant", restauranteSchema);

const rests = restaurantes.find();

console.log(rests);