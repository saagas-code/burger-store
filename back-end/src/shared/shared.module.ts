
import { Module } from '@nestjs/common';
import { IDateProvider } from './DateProvider/IDateProvider';
import { DayjsDateProvider } from './DateProvider/implements/DayjsDateProvider';

@Module({
  providers: [
    {
      provide: IDateProvider,
      useClass: DayjsDateProvider
    }
  ],
  exports: [IDateProvider]
  
})

export class SharedModule {}