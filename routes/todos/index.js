const express = require("express")
const router = express.Router()

const { getAll, getById, deleteById, updateById } = require("./controller")

router.get("/", getAll)
router.get("/:id", getById)
router.delete("/:id", deleteById)
router.put("/:id", updateById)

module.exports = router


