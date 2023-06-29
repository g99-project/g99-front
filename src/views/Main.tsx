import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// components
import ThumbnailCard from '../components/ThumbnailCard';
import boardListApi from '../api/main/boardList';
import { cardInfo } from '../types/cards';
import Dialog from '../components/Dialog';

function Main() {
  const [boardList, setBoardList] = useState<cardInfo[]>();
  const [dialog, setDialog] = useState(false);
  const loadList = async () => {
    setBoardList(await boardListApi());
  };

  useEffect(() => {
    loadList();
  }, []);

  const testOnClick = () => setDialog(!dialog);
  const setState = (state: boolean) => setDialog(state);

  return (
    <section className="mainWrap">
      <article className="mainBanner">
        <button type="button" onClick={testOnClick}>
          배너 구역
        </button>
      </article>

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

      <Dialog isOpen={dialog} setState={setState} />
    </section>
  );
}

export default Main;
