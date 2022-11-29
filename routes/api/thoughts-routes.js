const router = require('express').Router();
const {
  getAllthoughts,
  getthoughtsById,
  createthoughts,
  updatethoughts,
  deletethoughts
} = require('../../controllers/thoughts-controller');

// /api/thoughtss
router
  .route('/')
  .get(getAllthoughts)
  .post(createthoughts);

// /api/thoughtss/:id
router
  .route('/:id')
  .get(getthoughtsById)
  .put(updatethoughts)
  .delete(deletethoughts);