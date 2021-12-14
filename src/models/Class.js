import { Schema, model } from "mongoose";

const classSchema = new Schema({
    seccion:String,
    nombreClase: String,
    banner:String,
    descripcion: String,
    aula:String,
    asignaciones : [
        {
            titulo:String,
            fecha:String,
            hora:String,
            punto:String,
        }
    ],
    anuncios: [
        {
            mensaje:String,
            fecha:String,
            hora:String,
            comentarios:Array
        }
    ],
});

export default model("Class", classSchema);