const express = require("express")
const router = express.Router()
const { upload } = require("../../config")

const { getAll, getById, getByEmail, deleteByEmail, updateEmail } = require("./controller")

router.get("/", getAll)
router.get("/id/:id", getById)
router.get("/email/:email", getByEmail)
router.delete("/:email", deleteByEmail)
router.put("/:email", updateEmail)
router.post("/", upload.single("avatar"), require("./controller").postData)




module.exports = router
