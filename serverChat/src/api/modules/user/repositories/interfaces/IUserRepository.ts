import IUser from '@modules/user/schemas/interfaces/IUser';

export default interface IUserRepository {
  findById(id: string): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  create(user: IUser): Promise<void>;
  update(formulario: IUser, id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
