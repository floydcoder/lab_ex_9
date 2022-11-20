import React from 'react';

export default function PersonDetail({ person }) {
  // variable assignment
  const personId = person.id.value;
  // destructuring
  const { first, last } = person.name;
  return (
    <div key={personId}>
      <h3>
        {first} {last}
      </h3>
    </div>
  );
}
