import { Model } from 'objection';
import knex from '../index';

Model.knex(knex);

// Person model.
export default class Boilerplate extends Model {
  static get tableName() {
    return 'boilerplate';
  }
}
