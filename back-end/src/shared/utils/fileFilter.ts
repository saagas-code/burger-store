import { Request } from 'express';
import { extname } from 'path';
import { BadRequestException } from '@nestjs/common';

export const fileFilter = (req: Request, file: Express.Multer.File, cb: Function) => {
  const allowed: string[] = ['image/jpg', 'image/jpeg','image/png']
  
  if (!allowed.includes(file.mimetype)) {
    return cb(new BadRequestException('Apenas aceitamos arquivos do tipo jpg/jpeg/png'), false);
  }
  cb(null, true);
};