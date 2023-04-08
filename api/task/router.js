// `/api/tasks` router buraya
const router = require("express").Router();
const taskModel = require("./model");

router.get("/", async (req, res, next) => {
  try {
    let tasks = await taskModel.getAllTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    let newTask = await taskModel.createTasks(req.body);
    res.json(newTask);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
