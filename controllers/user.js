const User = require('../models/user');

module.exports = {
    createUser: async (req, res) => {
        try {
          const user = await User.create(req.body);
          res.json(user);
        } catch (error) {
          res.status(500).json({ message: 'Failed to create user.' });
        }
      },
  
    readUser: async (req, res) => {
        try {
          const user = await User.findByPk(req.params.id);
          if (!user) {
            res.status(404).json({ message: 'User not found.' });
          } else {
            res.json(user);
          }
        } catch (error) {
          res.status(500).json({ message: 'Failed to fetch user.' });
        }
      },

    readAllUser: async (req, res) => {
        try {
          const users = await User.findAll();
          res.json(users);
        } catch (error) {
          res.status(500).json({ message: 'Failed to fetch users.' });
        }
      },
  
    updateUser: async (req, res) => {
        try {
          const [updatedRowsCount] = await User.update(req.body, {
              where: { id: req.params.id }
          });      
          if (updatedRowsCount === 0) {
            res.status(404).json({ message: 'User not found.' });
          } else {
            const user = await User.findByPk(req.params.id);
            res.json(user);
          }
        } catch (error) {
          res.status(500).json({ message: 'Failed to update user.' });
        }
      },
  
    deleteUser: async (req, res) => {
        try {
          const deletedRowsCount = await User.destroy({ where: { id: req.params.id } });
          if (deletedRowsCount === 0) {
            res.status(404).json({ message: 'User not found.' });
          } else {
            res.json({ message: 'User deleted successfully.' });
          }
        } catch (error) {
          res.status(500).json({ message: 'Failed to delete user.' });
        }
      }
  }