const express = require("express");
const router = express.Router();

const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const { protect } = require("../middleware/authMiddleware");

// Debug imports
console.log("protect:", protect);
console.log("createTodo:", createTodo);
console.log("getTodos:", getTodos);
console.log("updateTodo:", updateTodo);
console.log("deleteTodo:", deleteTodo);

router.route("/")
  .post(protect, createTodo)
  .get(protect, getTodos);

router.route("/:id")
  .put(protect, updateTodo)
  .delete(protect, deleteTodo);

module.exports = router;