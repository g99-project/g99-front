import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
// import { thumbnailCardInfo } from '../types/cards';

function ThumbnailCard({ boardList }: any) {
  // const defaultImgUrl = '/images/default.png'; // 디폴트 이미지 url
  const [list, setList] = useState(null);
  const initDataSetting = async () => {
    await setList(boardList);
    console.log(list);
  };

  useEffect(() => {
    initDataSetting();
  }, [boardList]);

  return (
    <div className="cardArea">
      {/* {list.map((item: thumbnailCardInfo) => (
        <Card key={item.id}>
          <Link to="/">
            <div className="imgArea">
              <CardImg
                top
                width="100%"
                // src={item.imgUrl !== '' ? item.imgUrl : defaultImgUrl}
                alt={item.title}
              />
            </div>
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.contents}</CardText>
            </CardBody>
          </Link>
        </Card>
      ))} */}
    </div>
  );
}

export default ThumbnailCard;
