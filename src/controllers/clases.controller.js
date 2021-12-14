import Clase from "../models/Class";

export const createClase = async (req, res) => {
  try {
    let {
      seccion,
      nombreClase,
      banner,
      descripcion,
      aula,
      asignaciones,
      anuncios,
    } = req.body;

    const newClase = new Clase({
      seccion,
      nombreClase,
      banner,
      descripcion,
      aula,
      asignaciones,
      anuncios,
    });

    const claseSaved = await newClase.save();

    res.status(200).json(claseSaved);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getClases = async (req, res) => {
  const clases = await Clase.find();
  res.json(clases);
};

export const getClaseById = async (req, res) => {
  await Clase.findById(req.params.classId)
    .then((clase) => {
      res.json(clase);
    })
    .catch((error) => res.status(200).json(error));
};
