import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { CommonCompetition } from '../models/common.competition';

@Pipe({
    name: 'team',
    pure: false
})
@Injectable()
export class TeamPipe implements PipeTransform {
    transform(comp: CommonCompetition[], equipe) {
        return comp != null ? comp.filter(c => c.competition.categorie == equipe || c.competition.categorie == equipe) : null;
    }
}