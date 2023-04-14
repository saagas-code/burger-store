

export abstract class IEmailProvider {
  abstract send(to: string,): Promise<void>
}