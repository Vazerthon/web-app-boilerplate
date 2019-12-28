import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import boilerplate from '../graphql/queries/boilerplate';

export default function Home() {
  const { loading, error, data } = useQuery(boilerplate);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      {data.boilerplate.name}
    </div>
  );
}
