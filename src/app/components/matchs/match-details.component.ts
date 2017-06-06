import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../../services/matchs.service';
import { Match } from '../../models/match';
import { JoueurMatch } from '../../models/joueur.match';

@Component({
    selector: 'match-details',
    templateUrl: './match-details.component.html'
})
export class MatchDetailsComponent implements OnInit {

    private _idMatch: number;
    public match: Match;
    public joueurs: Array<JoueurMatch>

    constructor(private _route: ActivatedRoute, private _matchService: MatchService) {}

    ngOnInit() {
        this._route.params.subscribe(params => this.fetchData(params));
    }

    fetchData(params: any) {
        this._idMatch = this._route.snapshot.params['idMatch'];
        this._matchService.getMatchDetails(this._idMatch).subscribe(match => this.updateView(match));
    }

    updateView(match: Match) {
        this.match = match;
        this.joueurs = match.joueurs;
    }

}