import { ISet } from '../interfaces/set';
import { QueryBuilder } from '../queryBuilder';
import { IQuery } from '../interfaces/query';

export class Set implements ISet {
  code: string;
  name: string;
  series: string;
  totalCards: number;
  standardLegal: boolean;
  expandedLegal: boolean;
  releaseDate: string;
  symbolUrl: string;
  ptcgoCode: string;

  constructor() {}

  resource(): string {
    return 'sets';
  }

  static find(id: string): Promise<Set> {
    return QueryBuilder.find(this, id)
      .then(response => {
        return response;
      });
  }

  static all(): Promise<Set[]> {
    return QueryBuilder.all(this)
      .then(response => {
        return response;
      });
  }

  static where(params: IQuery[]): Promise<Set[]> {
    return QueryBuilder.where(this, params)
      .then(response => {
        return response;
      });
  }
  
}