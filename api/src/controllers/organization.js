const express = require("express");
const router = express.Router();

const OrganizationObject= require("../models/organization");

const SERVER_ERROR = "SERVER_ERROR";

router.get("/", async (req, res) => {
  try {
    // const query = {};
    const data = await OrganizationObject.find().sort("-created_at");
    return res.status(200).send({ ok: true, data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, code: SERVER_ERROR, error });
  }
});

module.exports = router;
