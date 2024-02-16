
const Color = require('../models/Color');

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
