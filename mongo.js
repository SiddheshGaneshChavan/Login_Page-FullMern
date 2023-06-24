const mongoose = require("mongoose");
// imports the Mongoose library
mongoose.connect("mongodb://127.0.0.1:27017/react-tut")
.then(() => {
    console.log("mongodb connected");
})
.catch((e) => {
    console.log(e);
});
//establishes a connection to the MongoDB database running locally on 127.0.0.1 (localhost) at port 27017. 
//The database name is specified as "react-tut". mongoose.connect() returns a promise that resolves if the connection is successful.

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
//This defines a new Mongoose schema for the "logins" collection.
// The schema specifies two fields: "email" and "password", both of type String and marked as required fields.

const collection = mongoose.model('logins', newSchema);
//: This creates a model based on the schema defined in the previous step. The model is named "logins" and will correspond to a collection in the MongoDB database with the same name.
// The collection variable will hold a reference to this model.
module.exports = collection;
