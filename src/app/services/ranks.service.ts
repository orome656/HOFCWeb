import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, ObservableInput } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Classement } from '../models/classement';

@Injectable()
export class RankService {
    private _siteUrl = 'api/classements'
    
    constructor(private _http: Http) { }

    public getClassements(): Observable<Classement[]>{
        return this._http.get(this._siteUrl)
                .map(this.extractData)
                .catch(this.logError);
    }

    public getClassementsForTeam(equipe: string): Observable<Classement[]> {
        return this._http.get(this._siteUrl + '/' + equipe)
            .map(this.extractData)
            .catch(this.logError);
    }

    private extractData(response: Response): Classement[] {
        var data = <Classement[]>response.json();
        return data;
    }

    private logError(error: Response, caught: Observable<Classement[]>): ObservableInput<Classement[]> {
        console.log(error);
        return Observable.throw(error);
    }

}