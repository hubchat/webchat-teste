import roomDialogRouter from '@modules/room-dialog/routes/room-dialog.routes';
import roomRouter from '@modules/room/routes/room.routes';
import sessionRouter from '@modules/session/routes/session.routes';
import userRouter from '@modules/user/routes/user.routes';
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) =>
  res.json({ message: 'API-HUBCHAT', version: 1.0 }),
);

routes.use('/user', userRouter);
routes.use('/session', sessionRouter);
routes.use('/room', roomRouter);
routes.use('/room-dialog', roomDialogRouter);

export default routes;
