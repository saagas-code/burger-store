
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IEmailProvider {
  abstract send(to: string,): Promise<void>
}