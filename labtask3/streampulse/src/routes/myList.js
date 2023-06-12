const express = require('express');
const myListController = require('../controllers/myList');

const router = express.Router();

router.get('/', myListController.getAllItems);
router.post('/', myListController.createItem);
router.get('/:id', myListController.getItemById);
router.put('/:id', myListController.updateItem);
router.delete('/:id', myListController.deleteItem);

module.exports = router;
