import React from 'react';
import { Link } from 'react-router-dom';
// components
import ThumbnailCard from '../components/ThumbnailCard'

function Main() {
  return (
    <>
      <div className='mainBanner'>배너 구역</div>
      <div className="innerWrap">
        <section>
          <div className="titArea">
            <h2>공지사항</h2>
            <Link to="/">더보기</Link>
          </div>
          <div className="cardArea">
            <ThumbnailCard />
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
