import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JoueurMatch } from '../../models/joueur.match';
import { Poste } from '../../enums/Poste';

@Component({
    selector: 'compo',
    templateUrl: './compo.component.html',
    styleUrls: ['./compo.component.css']
})
export class CompoComponent implements OnInit, OnChanges {

    private _idMatch: number;
    @Input() joueurs: Array<JoueurMatch>

    public players: Array<JoueurMatch>;

    public gardien: JoueurMatch;
    public defenseurs: Array<JoueurMatch>;
    public milieuxDef: Array<JoueurMatch>;
    public milieux: Array<JoueurMatch>;
    public milieuxOf: Array<JoueurMatch>;
    public buteurs: Array<JoueurMatch>;
    public remplacants: Array<JoueurMatch>;

    constructor() {

    }

    ngOnInit() {
        this.gardien;
        this.defenseurs = [];
        this.milieuxDef = [];
        this.milieux = [];
        this.milieuxOf = [];
        this.buteurs = [];
        this.remplacants = [];

        //this.dispatchPlayers();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.dispatchPlayers();
    }

    dispatchPlayers() {
        if(this.joueurs == null)
            return;
        this.joueurs.forEach(element => {
            switch((<any>Poste)[element.poste]) {
                case Poste.G:
                    this.gardien = element;
                    break;
                case Poste.DD:
                    this.defenseurs.push(element);
                    break;
                case Poste.DC:
                    this.defenseurs.push(element);
                    break;
                case Poste.DG:
                    this.defenseurs.push(element);
                    break;
                case Poste.MDF:
                    this.milieuxDef.push(element);
                    break;
                case Poste.MG:
                    this.milieux.push(element);
                    break;
                case Poste.MC:
                    this.milieux.push(element);
                    break;
                case Poste.MD:
                    this.milieux.push(element);
                    break;
                case Poste.MO:
                    this.milieuxOf.push(element);
                    break;
                case Poste.AiG:
                    this.buteurs.push(element);
                    break;
                case Poste.AiD:
                    this.buteurs.push(element);
                    break;
                case Poste.BT:
                    this.buteurs.push(element);
                    break;
                case Poste.REMP:
                    this.remplacants.push(element);
                    break;
                default:

            }
        });
    }
}