import { Component, OnInit } from '@angular/core';
import { ActuService } from '../../services/actus.service';
import { Actu } from '../../models/Actu';
import {MdButton} from '@angular/material';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private actus: Actu[];
    regularDistribution = 90 / 3;

    constructor(private _actuService: ActuService) {

    }

    ngOnInit() {
        this._actuService.getActus().subscribe(a => this.actus = a);
    }
}
