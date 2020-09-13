import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Project = new Schema({
    name: {type: String, required: true},
    host: {type: String, required: true, lowercase: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    database: {type: String, required: true},
    fk_user: {type: String, required: true},
});

Project.on('init', function (_) {
    // do stuff with the model
});

export default mongoose.model('Project', Project);