import React from 'react';

const Secrets = props => {
  const secrets = props.secrets.map((band, index) => {
    return <li key={index}>{band.name}</li>;
  });

  return (
    <div>
      {secrets}
    </div>
  );

};

export default Secrets;