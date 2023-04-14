import { Transport } from '@nestjs/microservices';

export default {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
}