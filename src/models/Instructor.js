import { Schema, model } from "mongoose";

const instructorSchema = new Schema({
    usuario: String,
    password: String,
    nombre: String,
    imagen: String,
    clases: [{
        ref: 'Class',
        type: Schema.Types.ObjectId
    }
    ]
}); 

export default model("Instructor", instructorSchema);