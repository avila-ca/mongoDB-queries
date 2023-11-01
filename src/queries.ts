import { ReadStream } from "fs";
import mongoose from "mongoose";

export const queries = async (collectionName:string) =>{
    try{
        const Restaurant = mongoose.model(collectionName, new mongoose.Schema({}));
        //const query1 = await Restaurant.find({});
        //const query2 = await Restaurant.find({}, {_id:1, name:1, borough:1, cuisine:1});
        //const query3 = await Restaurant.find({}, {_id:0, name:1, borough:1, cuisine:1});
        //const query4 = await Restaurant.find({}, {_id:0, name:1, borough:1, address:{zipcode:1}});
        //const query5 = await Restaurant.find({},{_id:0, name:1, borough:"Bronx"});
        //const query6 = await Restaurant.find({},{_id:0, name:1, borough:"Bronx"}).limit(5);
        //const query7 = await Restaurant.find({},{_id:0, name:1, borough:"Bronx"}).skip(5).limit(5);
        //const query8 = await Restaurant.find({"grades.score":{$gt:90}});
        //const query9  = await Restaurant.find({"grades.score":{$gt:80, $lt:100}});
        //const query10 = await Restaurant.find({"address.coord": {$lt:-95.754168}});
        //const query11 = await Restaurant.find({cuisine:{$eq:"American"}, "grades.score":{$gt:70}, "address.coord": {$lt:-65.754168}})
        //const query12 = await Restaurant.find({cuisine:{$ne:"American"}, "grades.score":{$gt:70}, "address.coord": {$lt:-65.754168}})
        //const query13 = await Restaurant.find({cuisine:{$ne:"American"}, "grades.grade":{$eq:"A"}, borough:{$ne:"Brooklyn"}}).sort({cuisine:-1});
        //const query14 = await Restaurant.find({ name:/^Wil/i }, {restaurant_id:1, cuisine:1, name:1})
        //const query15 = await Restaurant.find({ name:/ces$/i }, {restaurant_id:1, cuisine:1, name:1})
        //const query16 = await Restaurant.find({ name:/Reg/i }, {restaurant_id:1, cuisine:1, name:1})
        //const query17 = await Restaurant.find({borough:"Bronx", cuisine:{$in:["American","Chinese"]}});
        //const query18 = await Restaurant.find({ borough:{$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]} }, {restaurant_id:1, cuisine:1, name:1, borough:1})
        //const query19 = await Restaurant.find({ borough:{$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]} }, {restaurant_id:1, cuisine:1, name:1, borough:1})
        //const query20 = await Restaurant.find({ "grades.score":{$lt: 10}}, {restaurant_id:1, cuisine:1, name:1, borough:1})
        //const query21 = await Restaurant.find({ cuisine:"seafood", $nor: [{cuisine: "American"}, {cuisine:"Chinese"}, {name: /^Wil/i}]}, {restaurant_id:1, cuisine:1, name:1, borough:1})
        //const query22 = await Restaurant.find({"grades": {$elemMatch:{"grade":"A", "score": 11, "date": "2014-08-11T00:00:00Z"}}}, {restaurant_id:1, grades:1, name:1, borough:1});
        //const query23 = await Restaurant.find({"grades": {$elemMatch:{"grade":"A", "score": 9, "date": "2014-08-11T00:00:00Z"}}}, {restaurant_id:1, grades:1, name:1, borough:1});
        //const query24 = await Restaurant.find({"address.coord.1":{$gt:42, $lt:52}},{restaurant_id:1, name:1, "address.street":1, "address.coord.0":1, "address.coord.1":1});
        //const query25 = await Restaurant.find({}, {name:1, _id:0}).sort({"name":1});
        //const query26 = await Restaurant.find({}, {name:1, _id:0}).sort({"name":-1});
        //const query27 = await Restaurant.find({name:1, _id:0}).sort({cuisine:-1, borough: 1});
        //const query28 = await Restaurant.find({"address.street":{$esists:true}});
        const query29 = await Restaurant.find({},{})

        console.log(query29);
    }
    catch(err){
        console.log("Error query consulting: ", err);
    }
}
