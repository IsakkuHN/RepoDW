import { Schema, model } from "mongoose";

const userSchema = new Schema({
    nombre:String,
    imagen:String,
    clases: [{
        ref: 'Class',
        type: Schema.Types.ObjectId
    }
    ]
});

export default model("Participante", userSchema);