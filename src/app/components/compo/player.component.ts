import { Component, Input } from '@angular/core';
import { JoueurMatch } from '../../models/joueur.match';

@Component({
    selector: 'player',
    templateUrl: './player.component.html'
})
export class PlayerComponent {
    @Input() player: JoueurMatch;
}