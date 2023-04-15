import { User } from '../../entities/User';



export abstract class IUsersRepositoryCache {
  abstract list(): Promise<User[]>
}