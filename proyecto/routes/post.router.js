const express = require("express");
const router = express.Router();

const postController= require ("../controllers/post.controller");


router.get("/",postController.findAll);
router.get("/:identifier",postController.findOneById);
router-post("/", postController.create);

module.exports = router;