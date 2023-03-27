import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'react-feather';
import { Button, Input, InputGroup } from 'reactstrap';

function Header() {
  const [isLogin, setIsLogin]= useState(false);
  const [isSearch, setIsSearch]= useState(false);
  const onSubmit = (event: Event) => {
    console.log('확인');

  };

  return (
    <header>
      <div className="lArea">
        {
          isLogin ? "로그아웃" : <Button color="success">로그인</Button>
        }
      </div>
      <h1 className="logo">
        <Link to="/">홈으로</Link>
      </h1>
      <div className="rArea">
        <InputGroup>
          <Input type="text" id="searchInput" name="search" />
          <button>
            <Search className='searchBtn' />
          </button>
        </InputGroup>
      </div>
    </header>
  )
}

export default Header;