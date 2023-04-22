import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { thumbnailCardInfo } from '../types/cards';

function ThumbnailCard({ boardInfo }: any) {
  return (
    <div className="cardArea">
      {boardInfo?.map((item: thumbnailCardInfo) => (
        <Card>
          <Link to="/">
            <div className="imgArea">
              <CardImg top width="100%" src={item.imgUrl} alt={item.title} />
            </div>
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.description}</CardText>
            </CardBody>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default ThumbnailCard;
