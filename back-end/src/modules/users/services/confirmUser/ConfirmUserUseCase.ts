
import { Injectable } from '@nestjs/common';
import {hash} from 'bcrypt'
import { CreateUserDTO } from '../../DTO/CreateUserDTO';
import { HttpException } from '@nestjs/common/exceptions';
import { IUsersRepository } from '../../database/interface/IUsersRepository';
import { User } from '../../entities/User';
import { IStorageProvider } from 'src/shared/providers/StorageProvider/IStorageProvider';
import { INotificationRepository } from 'src/modules/notifications/database/interface/INotificationRepository';


@Injectable()
export class ConfirmUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private storageProvider: IStorageProvider,
    private notificationRepository: INotificationRepository
  ) {}

  async execute(token: string): Promise<void> {
    
  }
}