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
        const query14 = await Restaurant.find({ name:/^Wil/i }, {restaurant_id:1, cuisine:1, name:1})
        console.log(query14);
    }
    catch(err){
        console.log("Error query consulting: ", err);
    }
}