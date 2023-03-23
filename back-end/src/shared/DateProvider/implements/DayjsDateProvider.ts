import { IDateProvider } from './../IDateProvider';
import dayjs from 'dayjs';


export class DayjsDateProvider implements IDateProvider {
  addDays(days: number): Date {
    return dayjs().add(days, "days").toDate();
  }
  
}