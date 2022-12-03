const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/Thoughts
router
  .route('/')
  .get(getAllThought)
  .post(addThought);

// /api/Thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route(':userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;