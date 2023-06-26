import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// components
import ThumbnailCard from '../components/ThumbnailCard';
import boardListApi from '../api/main/boardList';
import { cardInfo } from '../types/cards';

function Main() {
  const [boardList, setBoardList] = useState<cardInfo[]>();
  const loadList = async () => {
    setBoardList(await boardListApi());
  };

  useEffect(() => {
    loadList();
  }, []);

  return (
    <section className="mainWrap">
      <article className="mainBanner">배너 구역</article>

      {/* 공지사항 */}
      <article>
        <div className="innerWrap">
          <div className="titArea">
            <h2>공지사항</h2>
            <Link to="/">더보기</Link>
          </div>
          {boardList && <ThumbnailCard boardList={boardList} />}
        </div>
      </article>
    </section>
  );
}

export default Main;
