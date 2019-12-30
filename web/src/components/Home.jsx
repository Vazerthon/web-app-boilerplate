import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from '@emotion/styled/macro';

import boilerplate from '../graphql/queries/boilerplate';

const Container = styled.div`
  margin: ${({ theme }) => theme.spacing.units(4)};
  padding: ${({ theme }) => theme.spacing.units(2)};
  border: ${({ theme }) => `${theme.spacing.units(1)} solid ${theme.colour.primary}`};
  color: ${({ theme }) => theme.colour.secondary};
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
