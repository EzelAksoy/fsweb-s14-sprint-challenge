//  `/api/projects` router buraya

const router = require("express").Router();
const projectModel = require("../project/model");

router.get("/", async (req, res, next) => {
  try {
    let projects = await projectModel.getAllprojects();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    let newPost = await projectModel.createProjects(req.body);
    res.json(newPost);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
