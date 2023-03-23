
import { Injectable } from '@nestjs/common';
import {hash} from 'bcrypt'
import { CreateUserDTO } from '../../DTO/CreateUserDTO';
import { HttpException } from '@nestjs/common/exceptions';
import { IUsersRepository } from '../../database/implements/IUsersRepository';
import { User } from '../../entities/User';
import { AuthUserDTO } from '../../DTO/AuthUserDTO';


@Injectable()
export class AuthUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
  ) {}

  async execute({email, password}: AuthUserDTO): Promise<void> {
    const errors: any = {}

    
  }
}