import { CommonCompetition } from './common.competition';
import { StatutVote } from '../enums/StatutVote';
import { JoueurMatch } from './joueur.match';

export class Match extends CommonCompetition {
    id: number;
    equipe1: string;
    equipe2: string;
    score1: number;
    score2: number;
    date: Date;
    message: string;
    infos: string;
    voteStatut: StatutVote;
    joueurs: Array<JoueurMatch>
}