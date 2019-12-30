import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { styled, media } from './styling';

import boilerplate from '../graphql/queries/boilerplate';

const Container = styled.div`
  margin: ${({ theme }) => theme.spacing.units(4)};
  padding: ${({ theme }) => theme.spacing.units(2)};
  border: ${({ theme }) => `${theme.spacing.units(1)} solid ${theme.colour.primary}`};
  color: ${({ theme }) => theme.colour.secondary};

  ${media('<=tablet')} {
    border: ${({ theme }) => `${theme.spacing.units(1)} solid ${theme.colour.secondary}`};
    color: ${({ theme }) => theme.colour.primary};
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(boilerplate);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <Container>
      {data.boilerplate.name}
    </Container>
  );
}
