import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/instances/prisma.service";
import { INotificationRepository } from "../../interface/INotificationRepository";
import { Notification } from "src/modules/notifications/entities/Notification";

@Injectable()
export class NotificationRepositoryPrisma implements INotificationRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async findById(notification_id: string): Promise<Notification> {
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

  async listMy(user_id: string): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany({
      where: {
        user_id
      }
    })
    return notifications
  }

  async readOne(notification_id: string): Promise<void> {
    await this.prisma.notification.update({
      where: {
        id: notification_id,
      },
      data: {
        read: new Date()
      }
    })
  }

  async readAll(user_id: string): Promise<void> {
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

