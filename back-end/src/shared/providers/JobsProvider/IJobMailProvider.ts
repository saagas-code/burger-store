

export abstract class IJobMailProvider {
  abstract accountCreated(emailTo: string): Promise<void>;
}