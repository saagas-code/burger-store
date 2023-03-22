import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { UpdateUserDTO } from "../../DTO/UpdateUserDTO";
import { User } from './../../entities/User';


export abstract class IUsersRepository {
  abstract create(data: CreateUserDTO): Promise<void>;
  abstract update(user_id: string, data: UpdateUserDTO): Promise<void>;
  abstract findByEmail(email: string): Promise<User>;
  abstract findById(id: string): Promise<User>;
}