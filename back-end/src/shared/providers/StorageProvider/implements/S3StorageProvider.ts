
import { S3 } from "aws-sdk";
import { IStorageProvider } from "../IStorageProvider";
import { randomUUID } from "crypto";


export class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: process.env.AWS_BUCKET_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
  }

  async save(file: Express.Multer.File): Promise<string> {
    const upload = await this.client.upload({
      Bucket: process.env.AWS_BUCKET_NAME,
      Body: file.buffer,
      Key: `${randomUUID()}-${file.originalname}`
    }).promise();

    return upload.Location
  }
  async delete(location: string): Promise<void> {
    await this.client.deleteObject({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: location
    }).promise();
  }
  
}