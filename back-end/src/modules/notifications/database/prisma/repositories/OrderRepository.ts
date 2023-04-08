import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/instances/prisma.service";
import { INotificationRepository } from "../../interface/INotificationRepository";
import { Notification } from "src/modules/notifications/entities/Notification";

@Injectable()
export class NotificationRepositoryPrisma implements INotificationRepository {
  constructor(
    private prisma: PrismaService
  ) {}
  async findById(user_id: string, notification_id: string): Promise<Notification> {
    throw new Error("Method not implemented.");
  }
  
  async listNotifications(): Promise<Notification[]> {
    const notifications = this.prisma.notification.findMany()
    return notifications;
  }

  async listMyNotifications(user_id: string): Promise<Notification[]> {
    throw new Error("Method not implemented.");
  }

  async readOneNotification(user_id: string, notification_id: any): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async readAllNotifications(user_id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  
  update: any;
  
}

