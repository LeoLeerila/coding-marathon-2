const express = require("express");
const{
    getAllJob,
    getJobById,
    createJob,
    updateJob,
    deleteJob
} = require("../controllers/jobControllers");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");

router.get("/", getAllJob);
router.get("/:jobId", getJobById);

router.use(requireAuth);

router.post("/", createJob);
router.put("/:jobId", updateJob);
router.delete("/:jobId", deleteJob);

module.exports = router;