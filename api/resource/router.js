// `/api/resources` router buraya
const router = require("express").Router();
const resourcesModel = require("./model");

router.get("/", async (req, res, next) => {
  try {
    let resources = await resourcesModel.getAllResources();
    res.json(resources);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    let NewPost = await resourcesModel.createResources(req.body);
    res.json(NewPost);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
