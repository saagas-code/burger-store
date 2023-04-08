import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/instances/prisma.service";
import { INotificationRepository, NotificationOption } from "../../interface/INotificationRepository";
import { Notification } from "src/modules/notifications/entities/Notification";

export const notificationOptions: {[key: string]: NotificationOption} =  {
  welcome: {
    title: 'Conta criada com sucesso!',
    message: 'Seja bem vindo'
  },
  accountConfirmed: {
    title: 'Conta confirmada com sucesso!',
    message: 'Conta confirmada com sucesso!'
  }
}

@Injectable()
export class NotificationRepositoryPrisma implements INotificationRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(title: string, message: string, user_id: string): Promise<void> {
    await this.prisma.notification.create({
      data: {
        title,
        message,
        user_id
      }
    })
  }

  async getById(notification_id: string): Promise<Notification> {
    const notification = await this.prisma.notification.findFirst({
      where: {
        id: notification_id
      }
    })
    return notification
  }
  
  async list(): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany()
    return notifications;
  }

  async listByUserId(user_id: string): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany({
      where: {
        user_id
      }
    })
    return notifications
  }

  async updateOneReadById(notification_id: string): Promise<void> {
    await this.prisma.notification.update({
      where: {
        id: notification_id,
      },
      data: {
        read: new Date()
      }
    })
  }

  async updateAllReadByUserId(user_id: string): Promise<void> {
    await this.prisma.notification.updateMany({
      where: {
        user_id
      },
      data: {
        read: new Date()
      }
    })
  }
}

