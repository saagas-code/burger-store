
export abstract class IStorageProvider {
  abstract save(fileBuffer: Buffer, fileName: string): Promise<string>;
  abstract delete(file: string, folder: string): Promise<void>;
}