import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { thumbnailCardInfo } from '../types/cards';

function ThumbnailCard({ boardArr }: any) {
  return (
    <div className="cardArea">
      {
        boardArr?.map((item: thumbnailCardInfo, idx: number) => (
          <Card key={idx}>
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
        ))
      }
    </div>
  )
}

export default ThumbnailCard;