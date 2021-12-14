import Instructor from "../models/Instructor";

export const createInstructor = async (req, res) => {
  let { usuario, password, nombre, imagen, clases } = req.body;

  const newInstructor = new Instructor({
    usuario,
    password,
    nombre,
    imagen,
    clases,
  });

  const instructorSaved = await newInstructor.save();

  res.status(200).json(instructorSaved);
};

export const getInstructors = async (req, res) => {
    const docentes = await Instructor.find().populate('clases');
    res.json(docentes);
}


export const getInstructorById = async (req, res) => {
    await Instructor.findById(req.params.instructorId)
      .then((instructor) => {
        res.status(200).json(instructor);
        res.end();
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };