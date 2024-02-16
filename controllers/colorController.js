// backend/controllers/colorController.js
const Color = require('../models/Color');

exports.getAllColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res.json(colors);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.addColor = async (req, res) => {
  try {
    const { name, hexCode } = req.body;
    const color = new Color({ name, hexCode });
    await color.save();
    res.status(201).send('Color added successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getColorById = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id);
    if (!color) return res.status(404).send('Color not found');
    res.json(color);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
