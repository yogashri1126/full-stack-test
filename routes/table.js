import React from 'react'
import data from '../src/Table'
const router = require("express").Router();

// Creating route
router.route("/table")
  .get(data)
  .post(data);

export default router;