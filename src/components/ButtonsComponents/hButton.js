import React from 'react';

function hButton(props) {
  return (
    <div className={props.cardImg} key={props.id}>
      <h2>Astronomy Picture of the Day:{props.title} !</h2>
      <p>{props.description}</p>
    </div>
  );
}
export default hButton;
