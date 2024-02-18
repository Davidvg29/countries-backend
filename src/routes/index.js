const { Router } = require("express");
const getActivities = require("../controllers/getActivities");
const getCountries = require("../controllers/getCountries");
const getCountriesId = require("../controllers/getCountriesId");
const getCountriesName = require("../controllers/getCountriesName");
const postActivities = require("../controllers/postActivities");

const router = Router();

router.get("/countries", getCountries)
router.get("/countries/name", getCountriesName)
router.get("/countries/:id", getCountriesId)
router.get("/activities", getActivities)

router.post("/activities", postActivities)

module.exports = router;
