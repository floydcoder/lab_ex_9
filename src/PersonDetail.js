import React from 'react';

export default function PersonDetail({ person }) {
  // variable assignment
  const id = person.id.value;
  const username = person.login.username;
  const gender = person.gender;
  const timeZoneDesc = person.location.timezone.description;

  const profilePic = person.picture.large;
  // destructuring
  const { first, last } = person.name;
  const { streetName, streetNumber } = person.location.street;
  const { city, state, country, postalCode } = person.location;

  return (
    <div>
      <h5>
        {first} {last}
      </h5>
      <section>
        <img src={profilePic} alt={last} />
        <p>
          Username: <span>{username}</span>
        </p>
        <p>
          Gender: <span>{gender}</span>
        </p>
        <p>
          Time Zone Description: {timeZoneDesc}
          <span>
            {timeZoneDesc}, {streetName}, {streetNumber}, {city}, {state},{' '}
            {country}, {postalCode}
          </span>
        </p>
      </section>
    </div>
  );
}
