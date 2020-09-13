import mongoose from "mongoose";
const Schema = mongoose.Schema;

let User = new Schema({
    email: {type: String, required: true, lowercase: true},
    name: {type: String, required: true, lowercase: true},
    password: {type: String, required: true},
});

User.on('init', function (_) {
    // do stuff with the model
});

export default mongoose.model('User', User);