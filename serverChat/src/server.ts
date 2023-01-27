import { serverHttp } from './http';

import './websocket';

serverHttp.listen(process.env.PORT || 3333, () => {
  const serverHost = {
    PORTA: process.env.PORT || 3333,
    STARTADO: true,
  };
  console.table(serverHost);
});
