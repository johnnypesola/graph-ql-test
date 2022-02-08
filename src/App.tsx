import React from 'react';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

type Reply = { rates: { currency: string, rate: string }[] };

const App: React.FC = () => {
  const { loading, error, data } = useQuery<Reply>(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (<>
  {data?.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>))}
  </>)
}

export default App;