import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../models/match';
import { MatchService } from '../../services/matchs.service';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
    private matchs: Match[];
    private team: string;
    private isLoading: boolean = true;

    private navLinks = [{
            link: '/calendar/equipe1',
            label: 'Equipe1'
        },{
            link: '/calendar/equipe2',
            label: 'Equipe2'
        },{
            link: '/calendar/equipe3',
            label: 'Equipe3'
    }];

    constructor(private _matchService: MatchService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.subscribe(params => this.updateView(params));
    }

    updateView(params) {
        this.matchs = [];
        this.isLoading = true;
        this.team = this._route.snapshot.params['team'];
        this._matchService.getHOFCMatchsForTeam(this.team).subscribe(a => {
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