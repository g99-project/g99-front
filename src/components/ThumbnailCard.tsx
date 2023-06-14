import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { thumbnailCardInfo } from '../types/cards';
import defaultImgUrl from '../assets/images/common/default.png';

function ThumbnailCard({ boardList }: any) {
  return (
    <div className="cardArea">
      {boardList?.map((item: thumbnailCardInfo) => (
        <Card key={item.id}>
          <Link to="/">
            <div className="imgArea">
              <CardImg
                top
                width="100%"
                src={
                  item.fileList.length > 0
                    ? item.fileList[0].file?.url
                    : defaultImgUrl
                }
                alt={item.title}
              />
            </div>
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.contents}</CardText>
            </CardBody>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default ThumbnailCard;
