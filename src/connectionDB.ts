import mongoose from "mongoose";
import { JsonObjectExpression } from "typescript";
import { queries } from "./queries";

const connectionDB = async (urlDB:string) =>  {
    try{
    await mongoose.connect(urlDB);
    }
    catch(err){
        console.log("Error mongoose connection: ", err);
    }   
}

const insertData = async (collectionName:string, data:[]) => {
    try{
        const collection = mongoose.connection.db.collection(collectionName);
        await collection.insertMany(data);
        console.log("Data inserted succesfully!");
        queries(collectionName);
    }
    catch(err){
        console.log("Error insert data: ", err);
    }
}

export {connectionDB, insertData};