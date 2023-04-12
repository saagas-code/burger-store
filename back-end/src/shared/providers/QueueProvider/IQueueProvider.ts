
export abstract class IQueueProvider {
  abstract publishInQueue(queueName: string, message: string): Promise<void>;
  abstract publishInExchange(exchange: string, routingKey: string, message: string): Promise<boolean>;
  abstract receive(queueName: string): Promise<void>;
}