import { CommonCompetition } from './common.competition';


export class Classement extends CommonCompetition {
    id: number;
    nom: string;
    joue: number;
    points: number;
    victoire: number;
    nul: number;
    defaite: number;
    bp: number;
    bc: number;
    diff: number;
}