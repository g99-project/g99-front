import React from 'react';
import { Link } from 'react-router-dom';
// components
import ThumbnailCard from '../components/ThumbnailCard';

// 임시
const boardInfo = [
  {
    title: '네이마르',
    description:
      '네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적',
    imgUrl: 'https://t1.daumcdn.net/cfile/tistory/99E164385AF3E81438',
  },
  {
    title: '네이마르',
    description:
      '네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적',
    imgUrl: 'https://t1.daumcdn.net/cfile/tistory/99E164385AF3E81438',
  },
  {
    title: '네이마르',
    description:
      '네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적네이마르 레알 마드리드 이적',
    imgUrl: 'https://t1.daumcdn.net/cfile/tistory/99E164385AF3E81438',
  },
];

function Main() {
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
          <ThumbnailCard boardInfo={boardInfo} />
        </div>
      </article>

      {/* 지구인들의 환경 이야기 */}
      <article>
        <div className="innerWrap">
          <div className="titArea">
            <h2>지구인들의 환경 이야기</h2>
            <Link to="/">더보기</Link>
          </div>
          <ThumbnailCard boardInfo={boardInfo} />
        </div>
      </article>
    </section>
  );
}

export default Main;
