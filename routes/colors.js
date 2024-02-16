
const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');

router.get('/', colorController.getAllColors);
router.post('/', colorController.addColor);
router.get('/:id', colorController.getColorById);

module.exports = router;
