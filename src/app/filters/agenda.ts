import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Match } from '../models/match';

@Pipe({
    name: 'agenda'
})
@Injectable()
export class AgendaPipe implements PipeTransform {
    transform(match: Match[], date: Date) {
        return match != null ? match.filter(m => this.isSameWeek(m.date, date) && (m.equipe1.indexOf("HORGUES ODOS") != -1 || m.equipe2.indexOf("HORGUES ODOS") != -1)) : null;
    }

    isSameWeek(date1: Date, date2: Date) {
        var monday1 = this.getPreviousMonday(date1);
        var monday2 = this.getPreviousMonday(date2);
        return (monday1.getDate() == monday2.getDate() && monday1.getFullYear() == monday2.getFullYear() && monday1.getMonth() == monday2.getMonth());
    }

    getPreviousMonday(d: Date) {
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    }
}