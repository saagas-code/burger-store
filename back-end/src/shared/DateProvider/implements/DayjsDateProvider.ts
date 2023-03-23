import { IDateProvider } from './../IDateProvider';
import * as dayjs from 'dayjs';


export class DayjsDateProvider implements IDateProvider {
  addDays(days: number): Date {
    return dayjs().add(days, "day").toDate();
  }
  
}