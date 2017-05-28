import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() title: string;
    @Input() texte: string;
    @Input() imageUrl: string;

    constructor(private domSanitizer: DomSanitizer) { }

    getBackgroundImage(imageUrl: string) : SafeStyle {
        return this.domSanitizer.bypassSecurityTrustStyle('url(' + imageUrl + ')');
    }

}