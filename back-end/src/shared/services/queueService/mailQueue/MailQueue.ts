import { Injectable } from "@nestjs/common";



@Injectable()
export class MailQueue {
  constructor(
    private mailQueue
  ) {}
}