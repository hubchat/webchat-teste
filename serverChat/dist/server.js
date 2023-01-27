"use strict";

var _http = require("./http");

require("./websocket");

_http.serverHttp.listen(process.env.PORT || 3333, () => {
  const serverHost = {
    PORTA: process.env.PORT || 3333,
    STARTADO: true
  };
  console.table(serverHost);
});