import React, { useState, useEffect } from 'react';
import hButton from './hButton';
import axios from 'axios';
import { cards } from './data';

//main child components

function Buttons(props) {
  const [nasaPic, setNasaPic] = useState('');
  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=ejUdZjYkuFWbXGQoDIt7EYrm7pntIim4sOOGItk8'
      )
      .then(response => {
        console.log(response.data);
        setNasaPic(response.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="picCard" key={nasaPic.id}>
      <h1> {nasaPic.title}</h1>
      <p>{nasaPic.date}</p>
      <p>{nasaPic.explanation}</p>

      {/* cardImg={props.cardImg} */}
      <img src={nasaPic.url} />
    </div>
  );
}
export default Buttons;
