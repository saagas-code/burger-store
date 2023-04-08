
export abstract class IStorageProvider {
  abstract save(file: Express.Multer.File): Promise<string>;
  abstract delete(file: string, folder: string): Promise<void>;
}