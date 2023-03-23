
import { Injectable } from '@nestjs/common';
import {hash} from 'bcrypt'
import { CreateUserDTO } from '../../DTO/CreateUserDTO';
import { CreateUserController } from './CreateUserController';
import { HttpException } from '@nestjs/common/exceptions';
import { IUsersRepository } from './../../database/implements/IUsersRepository';
import { User } from '../../entities/User';


@Injectable()
export class CreateUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
  ) {}

  async execute({name, email, password, admin, image}: CreateUserDTO): Promise<void> {
    const errors: any = {}

    const emailExists = await this.userRepository.findByEmail(email)
    if(emailExists) {
      errors.email = 'Email já existente';
    }

    if (Object.keys(errors).length > 0) {
      throw new HttpException({errors}, 409)
    }

    const passwordHash = await hash(password, 10)
    const user = new User()
    Object.assign(user, {
      name, email, password: passwordHash, admin, image
    })

    await this.userRepository.create(user)
  }
}