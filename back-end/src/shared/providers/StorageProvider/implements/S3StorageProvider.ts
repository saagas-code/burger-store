
import { DeleteObjectCommand, PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import { IStorageProvider } from "../IStorageProvider";
import { randomUUID } from "crypto";
import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

export class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: process.env.AWS_BUCKET_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      }
    })
  }

  async save(file: Express.Multer.File): Promise<string> {

    const fileName = `${randomUUID()}-${file.originalname}`
    const uploadComand = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Body: file.buffer,
      Key: fileName,
      ACL: "public-read"
    }

    try {
      await this.client.send(new PutObjectCommand(uploadComand))

      const bucketUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/`
      const url = `${bucketUrl}${fileName}`
      return url

    } catch (err) {
      console.log("Ocorreu um erro ao salvar a imagem no STORAGE", err)
      throw new HttpException('Ocorreu um erro ao salvar a imagem no STORAGE', HttpStatus.FORBIDDEN);
      
    }

  }
  async delete(location: string): Promise<void> {
    const deleteCommand = new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: location
    })

    try {
      await this.client.send(deleteCommand)

    } catch (err) {
      console.log("Ocorreu um erro ao tentar deletar a imagem do STORAGE", err)
      throw new HttpException('Ocorreu um erro ao deletar a imagem no STORAGE', HttpStatus.FORBIDDEN);
    }

  }
  
}
