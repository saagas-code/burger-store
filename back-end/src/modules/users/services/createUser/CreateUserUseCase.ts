
import { Injectable } from '@nestjs/common';
import {hash} from 'bcrypt'
import { CreateUserDTO } from '../../DTO/CreateUserDTO';
import { CreateUserController } from './CreateUserController';
import { HttpException } from '@nestjs/common/exceptions';
import { IUsersRepository } from '../../database/interface/IUsersRepository';
import { User } from '../../entities/User';
import { IStorageProvider } from 'src/shared/providers/StorageProvider/IStorageProvider';


@Injectable()
export class CreateUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private storageProvider: IStorageProvider
  ) {}

  async execute({name, email, password, admin}: CreateUserDTO, file: Express.Multer.File): Promise<void> {
    const errors: any = {}

    const emailExists = await this.userRepository.findByEmail(email)
    if(emailExists) {
      errors.email = 'Email já existente';
    }

    if (Object.keys(errors).length > 0) {
      throw new HttpException({errors}, 409)
    }
    
    const location = await this.storageProvider.save(file)
    const passwordHash = await hash(password, 10)

    const user = new User()
    Object.assign(user, {
      name, email, password: passwordHash, admin, image: location
    })

    await this.userRepository.create(user)
  }
}