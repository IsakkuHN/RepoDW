import Participante from "../models/Participante";

export const createParticipante = async (req, res) => {
  try {
    let { nombre, imagen, clases } = req.body;

    const newParticipante = new Participante({nombre, imagen, clases});

    const participanteSaved = await newParticipante.save();

    res.status(200).json(participanteSaved);
  } catch (error) {
      res.status(400).json(error.message);
  }
};

export const getParticipantes = async (req, res) => {
  const participantes = await Participante.find().populate('clases');
  res.json(participantes);
};

export const getParticipanteById = async (req, res) => {
  await Participante.findById(req.params.participanteId).populate('clases')
    .then((participante) => {
      res.status(200).json(participante);
      res.end();
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
