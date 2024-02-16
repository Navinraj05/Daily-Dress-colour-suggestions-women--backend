const express = require('express');
const Color = require('../models/Color');
const router = express.Router();
const colorDetailController = require('../controllers/colorDetailController');

// Define routes
//router.get('/:id', colorDetailController.getColorById);

exports.getColorById = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id);
    if (!color) return res.status(404).send('Color not found');
    res.json(color);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = router;