import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

function ThumbnailCard(cardInfo: any) {
  return (
    <Card>
      <Link to="/">
        <div className="imgArea">
          <CardImg top width="100%" src="https://t1.daumcdn.net/cfile/tistory/99E164385AF3E81438" alt="Card image cap" />
        </div>
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
      </Link>
    </Card>
  )
}

export default ThumbnailCard;