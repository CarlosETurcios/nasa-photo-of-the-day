import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaPicCard from './NasaPicCard';

const NasaPicInfo = () => {
  const [pic, setPic] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=IGIqHd40uEyJeoQClZivWvzRVwVoKv15R0fPzECk'
      )
      .then(response => {
        console.log(response.data);
        setPic(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container'>
      <NasaPicCard pic={pic} setPic={setPic} />
    </div>
  );
};
export default NasaPicInfo;
