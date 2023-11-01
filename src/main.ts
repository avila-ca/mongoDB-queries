import dotenv from "dotenv";
import mongoose from "mongoose";
import fs from "fs/promises";
import { connectionDB, insertData } from "./connectionDB";
import { queries } from "./queries";

dotenv.config();

export async function main() {
  try {
      const nameDB = process.env.DATABASE ?? "error";
      const urlDB = process.env.MONGO_URI ?? "error";

      await connectionDB(urlDB);
      console.log(`${nameDB} database connected!`);

      const restaurantData = await fs.readFile("./restaurants/restaurants.json", "utf-8");
      const data = JSON.parse(restaurantData);
    console.log('File readed!');

    const collectionName = "restaurantes"; 
    insertData(collectionName, data);
} catch (err) {
  console.error("Error: connection DB | FS reading:", err);
} 
}

main();
