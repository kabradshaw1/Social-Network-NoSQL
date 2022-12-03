const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought, //don't forget to push the created thought's _id to the associated user's thoughts array field 
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


// /api/thoughts/<thoughtId>/reactions
router.route('thoughts/:thoughtId/reactions')
.delete(removeReaction)
.post(addReaction);

module.exports = router;