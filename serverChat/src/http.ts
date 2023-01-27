import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import './api/shared/container';
import './api/database';

import { errors } from 'celebrate';
import cors from 'cors';
import express from 'express';
import RateLimit from 'express-rate-limit';
import helmet from 'helmet';
import http from 'http';
import { Server } from 'socket.io';
import swaggerUi from 'swagger-ui-express';

import middlewareError from './api/middlewares/error/error';
import routes from './api/routes';
import swaggerFile from './api/swagger.json';

const limiter = RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5000,
});

const app = express();

app.use(cors());
app.use(helmet());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(limiter);

app.use('/api/v1', routes);

app.use(errors());
app.use(middlewareError);

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'POST', 'DELETE'],
    allowedHeaders: ['Authorization'],
  },
});

export { serverHttp, io };
