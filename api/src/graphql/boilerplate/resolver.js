import queries from '../../data/queries';

// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Query: {
    boilerplate: () => ({ name: queries.boilerplate() }),
  },
};
