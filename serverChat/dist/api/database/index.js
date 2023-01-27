"use strict";

var _mongoose = require("mongoose");

(0, _mongoose.connect)(String(process.env.MONGO_URL));