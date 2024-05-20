const { Router } = require('express')
const router = Router()
const axiosController = require("../Controllers/axiosController")
router.get("/axiosget", axiosController.axiosGet)
router.get("/getdata", axiosController.getData)

router.post("/post", axiosController.postData)
router.get("/get/:id", axiosController.getById)
router.patch("/update", axiosController.updateData)

router.post("/postdata", axiosController.postData1)
router.get("/getdata1", axiosController.getData1)
router.delete("/getdata1", axiosController.deleteData1)


module.exports = router;