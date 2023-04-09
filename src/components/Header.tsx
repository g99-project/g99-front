import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'react-feather';
import { Button } from 'reactstrap';

function Header() {
  const [isLogin] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const onSearch = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // isSearch ? console.log('검색') : setIsSearch(true);
    if (isSearch) {
      console.log('검색');
    } else {
      setIsSearch(true);
    }
  };

  useEffect(() => {
    function handleOutside(e: MouseEvent): void {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearch(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [searchRef]);

  return (
    <header>
      <div className="lArea">
        {isLogin ? '로그아웃' : <Button color="success">로그인</Button>}
      </div>
      <h1 className="logo">
        <Link to="/">홈으로</Link>
      </h1>
      <div className="rArea" ref={searchRef}>
        <form className={isSearch ? 'open' : ''}>
          <input type="text" id="searchInput" name="search" />
          <button type="button" className="searchBtn" onClick={onSearch}>
            <Search />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;