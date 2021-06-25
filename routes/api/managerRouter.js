var express = require("express");
const managerEmailValidator = require("../../middlewares/managerEmailValidator");
const manageValidator = require("../../middlewares/manageValidator");
const ManagerModel = require("../../models/manager");
var router = express.Router();

router.get("/", async (req, res) => {
  try {
    let Manager = await ManagerModel.getAllManager();
    res.status(200).send(Manager);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting all Manager!");
  }
});

/* GET Managers listing. */
router.get("/:id", async (req, res) => {
  try {
    let Manager = await ManagerModel.getManagerById(req.params.id);
    res.status(200).send(Manager);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting User Manager!");
  }
});

router.post("/", manageValidator, managerEmailValidator, async (req, res) => {
  try {
    console.log(req.body);
    let Manager = new ManagerModel();
    Manager = await Manager.addManager(req.body);

    res.status(200).send(Manager);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Adding Manager!");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await ManagerModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Manager is Deleted!");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Getting all Manager!");
  }
});

module.exports = router;
