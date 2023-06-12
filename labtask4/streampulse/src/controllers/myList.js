const MyList = require('../models/myList');

const myListController = {
  getAllItems: async (req, res) => {
    try {
      const items = await MyList.find();
      res.json(items);
    } catch (error) {
      console.error('Error getting items:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createItem: async (req, res) => {
    const { moviename, releaseDate } = req.body;

    try {
      const newItem = new MyList({ moviename, releaseDate });
      const savedItem = await newItem.save();
      res.json(savedItem);
    } catch (error) {
      console.error('Error creating item:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getItemById: async (req, res) => {
    const { id } = req.params;

    try {
      const item = await MyList.findById(id);
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      console.error('Error getting item by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateItem: async (req, res) => {
    const { id } = req.params;
    const { moviename, releaseDate } = req.body;

    try {
      const updatedItem = await MyList.findByIdAndUpdate(id, { moviename, releaseDate }, { new: true });
      if (updatedItem) {
        res.json(updatedItem);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      console.error('Error updating item:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteItem: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedItem = await MyList.findByIdAndDelete(id);
      if (deletedItem) {
        res.json({ message: 'Item deleted successfully' });
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = myListController;
