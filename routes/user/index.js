const express = require("express")
const router = express.Router()

const { getAll, getById, getByEmail, deleteByEmail, updateEmail } = require("./controller")

router.get("/", getAll)
router.get("/id/:id", getById)
router.get("/email/:email", getByEmail)
router.delete("/:email", deleteByEmail)
router.put("/:email", updateEmail)




module.exports = router
