// backend/controllers/colorDetailController.js
const Color = require('../models/Color');

exports.getColorById = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id);
    if (!color) return res.status(404).send('Color not found');
    res.json(color);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
