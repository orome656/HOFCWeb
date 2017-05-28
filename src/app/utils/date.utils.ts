export class DateUtils {

    public static isSameWeek(date1: Date, date2: Date) {
        var monday1 = this.getPreviousMonday(date1);
        var monday2 = this.getPreviousMonday(date2);
        return (monday1.getDate() == monday2.getDate() && monday1.getFullYear() == monday2.getFullYear() && monday1.getMonth() == monday2.getMonth());
    }

    public static getPreviousMonday(d: Date): Date {
        var date = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(date.setDate(diff));
    }

    public static getPreviousWeek(d: Date): Date {
        var date = new Date(d);
        return new Date(date.setDate(date.getDate() - 7));
    }

    public static getNextWeek(d: Date): Date {
        var date = new Date(d);
        return new Date(date.setDate(date.getDate() + 7));
    }

    public static formatDate(d: Date): string {
        var date = "" + d.getFullYear();

        date += "-"

        if (d.getMonth() < 9)
            date += "0";

        date += d.getMonth() + 1;

        date += "-";

        if (d.getDate() < 10)
            date += "0";

        date += d.getDate();
        
        return date;
    }
}