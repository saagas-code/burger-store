
import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService extends Redis {
  constructor() {
    super()

    super.on('error', (err) => {
      console.log("Erro in Redis")
      console.log(err);
      process.exit(1);
    })

    super.on('connect', () => {
      console.log("Redis connected")
    })
  }
}