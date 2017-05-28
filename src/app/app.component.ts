import { Component, OnInit } from '@angular/core';
import { ActuService } from './services/actus.service';
import { MatchService } from './services/matchs.service';
import { RankService } from './services/ranks.service';

import { Link } from './models/link';

import { DateUtils } from './utils/date.utils';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ActuService, MatchService, RankService]
})
export class AppComponent implements OnInit {

    weeks: Link[] = new Array();

    ngOnInit() {
        var date = new Date();
        var monday = DateUtils.getPreviousMonday(date);
        var previousWeek = DateUtils.getPreviousWeek(monday);
        var nextWeek = DateUtils.getNextWeek(monday);
        this.weeks.push({ link: 'agenda/' + DateUtils.formatDate(previousWeek), label: 'Semaine dernière' });
        this.weeks.push({ link: 'agenda/' + DateUtils.formatDate(monday), label: 'Cette semaine' });
        this.weeks.push({ link: 'agenda/' + DateUtils.formatDate(nextWeek), label: 'Semaine Prochaine' });
    }
}
