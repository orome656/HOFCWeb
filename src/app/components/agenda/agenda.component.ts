import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../models/match';
import { Link } from '../../models/link';
import { MatchService } from '../../services/matchs.service';

import { DateUtils } from '../../utils/date.utils';

@Component({
    selector: 'agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
    private matchs: Match[];
    private date: Date;
    private isLoading: boolean = true;

    private navLinks: Link[] = [];

    constructor(private _matchService: MatchService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.subscribe(params => this.updateView(params));
        var date = new Date();
        var monday = DateUtils.getPreviousMonday(date);
        var previousWeek = DateUtils.getPreviousWeek(monday);
        var nextWeek = DateUtils.getNextWeek(monday);
        this.navLinks.push({ link: '/agenda/' + DateUtils.formatDate(previousWeek), label: 'Semaine dernière' });
        this.navLinks.push({ link: '/agenda/' + DateUtils.formatDate(monday), label: 'Cette semaine' });
        this.navLinks.push({ link: '/agenda/' + DateUtils.formatDate(nextWeek), label: 'Semaine Prochaine' });
    }

    updateView(params) {
        this.matchs = [];
        this.isLoading = true;
        var splitDate = this._route.snapshot.params['date'].split('-');
        this.date = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
        this._matchService.getHOFCMatchsForWeek(this.date).subscribe(a => {
            this.matchs = a;
            this.isLoading = false;
        });
    }

    isHOFC(team: string) {
        return !(team != null && team.indexOf("HORGUES ODOS") != -1);
    }

    OpenMatchDetails() {
        console.log('Coucou');
    }
}