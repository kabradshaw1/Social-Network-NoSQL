const router = require('express').Router();
const {
  getAlluser,
  getuserById,
  createuser,
  updateuser,
  deleteuser
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAlluser)
  .post(createuser);

// /api/users/:id
router
  .route('/:id')
  .get(getuserById)
  .put(updateuser)
  .delete(deleteuser);