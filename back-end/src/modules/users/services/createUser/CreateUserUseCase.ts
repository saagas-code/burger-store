
import { Injectable } from '@nestjs/common';
import {hash} from 'bcrypt'
import { CreateUserDTO } from '../../DTO/CreateUserDTO';
import { HttpException } from '@nestjs/common/exceptions';
import { IUsersRepository } from '../../database/interface/IUsersRepository';
import { User } from '../../entities/User';
import { IStorageProvider } from 'src/shared/providers/StorageProvider/IStorageProvider';
import { INotificationRepository } from 'src/modules/notifications/database/interface/INotificationRepository';
import { JwtService } from '@nestjs/jwt';
import { IDateProvider } from 'src/shared/providers/DateProvider/IDateProvider';


@Injectable()
export class CreateUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private storageProvider: IStorageProvider,
    private notificationRepository: INotificationRepository,
    private jwt: JwtService,
    private dayjsDateProvider: IDateProvider
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

    const newUser = await this.userRepository.create(user)
    await this.notificationRepository.create("welcome", newUser.id)

    const confirm_token = this.jwt.sign({user_id: newUser.id}, {
      expiresIn: process.env.JWT_CONFIRM_TIME
    })

    console.log(confirm_token)
  }
}