import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  addDaysToDate(date: Date, daysToSum: number): Date {
    console.log(date, daysToSum);
    const daysArray = Array.from(Array(daysToSum).keys());
    let days = 0;
    let dayStart = date.getDay();
    for (const day of daysArray) {
        dayStart += 1;
        if (dayStart === 6 || dayStart === 7) {
          days++;
        }
        days++;
    }
    date.setDate(date.getDate() + days);
    return date;
  }
}
