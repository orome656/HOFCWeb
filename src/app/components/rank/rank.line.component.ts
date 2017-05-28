import { Component, Input } from '@angular/core';

@Component({
    selector: 'rank-line',
    templateUrl: './rank.line.component.html',
    styleUrls: ['./rank.line.component.css']
})
export class RankLineComponent {
    @Input() rank: string;
    @Input() nom: string;
    @Input() points: string;
    @Input() joue: string;
    @Input() victoire: string;
    @Input() nul: string;
    @Input() defaite: string;
    @Input() bp: string;
    @Input() bc: string;
    @Input() diff: string;

    isHOFC() {
        return !(this.nom != null && this.nom.indexOf("HORGUES ODOS") != -1);
    }
}