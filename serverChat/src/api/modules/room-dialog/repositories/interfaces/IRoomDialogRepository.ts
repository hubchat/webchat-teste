import IRoomDialog from '@modules/room-dialog/schemas/interfaces/IRoomDialog';

export default interface IRoomDialogRepository {
  find(page: number, limit: number, rommId: string): Promise<IRoomDialog[]>;
  create(room: IRoomDialog): Promise<void>;
}
