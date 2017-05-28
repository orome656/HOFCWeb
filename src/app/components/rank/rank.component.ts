import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RankService } from '../../services/ranks.service';
import { Classement } from '../../models/classement';

@Component({
    templateUrl: './rank.component.html',
    styleUrls: ['./rank.component.css'],
    selector: 'rank'
})
export class RankComponent implements OnInit {
    private _ranks: Classement[];
    private team: string;
    private isLoading: boolean = true;

    private navLinks = [{
        link: '/rank/equipe1',
        label: 'Equipe1'
    }, {
        link: '/rank/equipe2',
        label: 'Equipe2'
    }, {
        link: '/rank/equipe3',
        label: 'Equipe3'
    }];

    constructor(private _rankService: RankService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.subscribe(params => this.updateView(params));
    }

    updateView(params) {
        this._ranks = [];
        this.isLoading = true;
        this.team = this._route.snapshot.params['team'];
        this._rankService.getClassementsForTeam(this.team)
            .subscribe(c => {
                this._ranks = c;
                this.isLoading = false;
            });
    }
}