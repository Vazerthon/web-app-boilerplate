import db from '../index';

const mapToProp = prop => array => array.map(x => x[prop]);
const mapToMessage = mapToProp('message');
const arrayToComaString = array => array.reduce((p, c) => `${p}${p ? ', ' : ''}${c}`, '');

export default () => db
  .select('message')
  .from('boilerplate')
  .whereNot('message', 'null')
  .then(mapToMessage)
  .then(arrayToComaString);
