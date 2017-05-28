import { CommonCompetition } from './common.competition';
import { StatutVote } from '../enums/StatutVote';

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
}