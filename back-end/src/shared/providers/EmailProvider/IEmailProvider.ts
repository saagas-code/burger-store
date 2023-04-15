
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IEmailProvider {
  abstract accountCreated(to: string, token: string): Promise<void>
}