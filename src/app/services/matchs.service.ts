import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, ObservableInput } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Match } from '../models/match';
import { DateUtils } from '../utils/date.utils';

@Injectable()
export class MatchService {
    private _siteUrl = 'api/matchs';

    constructor(private _http: Http) { }

    getMatchs(): Observable<Match[]> {
        return this._http.get(this._siteUrl)
            .map(this.extractData)
            .catch(this.logError);
    }

    getMatchDetails(id: number): Observable<Match> {
        return this._http.get(this._siteUrl + '/' + id)
            .map(this.extractDetails)
            .catch(this.logErrorDetails);
    }

    getHOFCMatchsForTeam(equipe: string): Observable<Match[]> {
        return this._http.get(this._siteUrl + '/team/' + equipe)
            .map(this.extractData)
            .catch(this.logError);
    }

    getHOFCMatchsForWeek(date: Date): Observable<Match[]> {
        return this._http.get(this._siteUrl + '/week/' + DateUtils.formatDate(date))
            .map(this.extractData)
            .catch(this.logError);
    }

    extractData(response: Response): Match[] {
        var data = <Match[]>response.json();
        data.forEach((d) => {
            d.date = new Date(d.date);
        });
        return data;
    }

    extractDetails(response: Response): Match {
        var match = <Match>response.json();
        match.date = new Date(match.date);
        return match;
    }

    logError(error: Response, caught: Observable<Match[]>): ObservableInput<Match[]> {
        console.log(error);
        return Observable.throw(error);
    }

    logErrorDetails(error: Response, caught: Observable<Match>): ObservableInput<Match[]> {
        console.log(error);
        return Observable.throw(error);
    }
}