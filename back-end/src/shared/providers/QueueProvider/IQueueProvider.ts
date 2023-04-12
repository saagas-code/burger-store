
export abstract class IQueueProvider {
  abstract send(queueName: string, message: string): Promise<void>;
  abstract receive(queueName: string): Promise<void>;
}