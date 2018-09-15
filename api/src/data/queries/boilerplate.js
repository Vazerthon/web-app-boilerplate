import boilerplate from '../models/boilerplate';

const mapToProp = prop => array => array.map(x => x[prop]);
const mapToMessage = mapToProp('message');
const arrayToComaString = array => array.reduce((p, c) => `${p}${p ? ', ' : ''}${c}`, '');

export default () => boilerplate.query()
  .where('message', '!=', 'null')
  .then(mapToMessage)
  .then(arrayToComaString);
