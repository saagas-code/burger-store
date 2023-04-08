
import { Module } from '@nestjs/common';
import { IDateProvider } from './providers/DateProvider/IDateProvider';
import { DayjsDateProvider } from './providers/DateProvider/implements/DayjsDateProvider';


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