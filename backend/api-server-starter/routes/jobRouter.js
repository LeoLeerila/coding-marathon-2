const express = require("express");
const{
    getAllJob,
    getJobById,
    createJob,
    updateJob,
    deleteJob
} = require("../controllers/jobControllers");
const router = express.Router();

router.get("/", getAllJob);
router.post("/", createJob);
router.get("/:jobId", getJobById);
router.put("/:jobId", updateJob);
router.delete("/:jobId", deleteJob);

module.exports = router;