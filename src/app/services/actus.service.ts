import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, ObservableInput } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Actu } from '../models/Actu';

@Injectable()
export class ActuService {
    private _siteUrl = 'api/actus';

    constructor(private _http: Http) { }

    getActus(): Observable<Actu[]> {
        return this._http.get(this._siteUrl)
            .map(this.extractData)
            .catch(this.logError);
    }

    extractData(response: Response): Actu[] {
        var data = <Actu[]>response.json();
        data.forEach((d) => {
            d.date = new Date(d.date);
        });
        return data;
    }

    logError(error: Response, caught: Observable<Actu[]>): ObservableInput<Actu[]> {
        console.log(error);
        return Observable.throw(error);
    }
}