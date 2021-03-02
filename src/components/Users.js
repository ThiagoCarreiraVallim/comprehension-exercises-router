import React from 'react';

const Users = ({ greetingMessage = 'Hi There', match }) => {
  return (
    <div>
      <h2> Users </h2>
      <p> {greetingMessage}, this is my awesome Users component, with id: { match.params.id } </p>
    </div>
  )
};

export default Users;