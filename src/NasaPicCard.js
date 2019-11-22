import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardHeader
} from 'reactstrap';

const NasaPicCard = props => {
  console.log(props);

  return (
    <div className='pic-card' key={props.id}>
      <Card
        body
        inverse
        style={{ backgroundColor: 'rgba(255,0,0,0.5)', borderColor: 'red' }}
      >
        <CardHeader
          inverse
          style={{
            backgroundColor: '#9494b8',
            color: 'black',
            borderColor: 'white',
            fontStyle: 'sans-serif'
          }}
        >
          <h1>Astronomy Picture of the Day</h1>

          <h2>{props.pic.title}</h2>
        </CardHeader>
        <CardText>
          <p>Date: {props.pic.date}</p>
        </CardText>
        <CardBody>
          <p>{props.pic.explanation}</p>
        </CardBody>
        <CardText>
          <p>{props.pic.copyright}</p>
        </CardText>
        <img src={props.pic.url} />
      </Card>
    </div>
  );
};
export default NasaPicCard;
