

export abstract class IJobMailProvider {
  abstract accountCreatedJob(emailTo: string, token: string): Promise<void>;
  abstract sendConfirmTokenJob(emailTo: string, token: string): Promise<void>;
  abstract accountVerified(emailTo: string): Promise<void>;
}