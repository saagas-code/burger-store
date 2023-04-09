import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/instances/prisma.service";
import { INotificationRepository, NotificationOption } from "../../interface/INotificationRepository";
import { Notification } from "src/modules/notifications/entities/Notification";

export const notificationOptions: {[key: string]: NotificationOption} =  {
  welcome: {
    title: 'Bem-vindo(a) ao nosso sistema!',
    message: 'Olá! Estamos muito felizes em tê-lo(a) conosco. Esperamos que você aproveite ao máximo todas as funcionalidades do nosso sistema e que tenha a melhor experiência possível.'
  },
  accountConfirmed: {
    title: 'Confirmação de conta realizada com sucesso!',
    message: 'Parabéns! Sua conta foi confirmada com sucesso. Agora você já pode acessar todas as funcionalidades do nosso sistema.'
  }
}

@Injectable()
export class NotificationRepositoryPrisma implements INotificationRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async delete(notification_id: any): Promise<void> {
    await this.prisma.notification.delete({
      where: {
        id: notification_id
      }
    })
  }

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

