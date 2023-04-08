
export abstract class IStorageProvider {
  abstract save(file: Express.Multer.File): Promise<string>;
  abstract delete(location: string): Promise<void>;
}