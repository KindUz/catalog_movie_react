import React, {useState} from 'react'
import cl from '../header/Header.module.css'
import Input from '../input/Input'
import { Link } from 'react-router-dom'

const Header = (props) => {

  const [activeTab, setActiveTab] = useState('popular');

  const popular_url = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=";
  const best_url = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=";
  const await_url = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=";


  const [searchValue, setSearchValue] = useState('');

  const handlePopular = (e) => {
    setActiveTab("popular");
    props.url_change(popular_url);
  }

  const handleBest = () => {
    setActiveTab("best");
    props.url_change(best_url);
  }

  const handleAwait = () => {
    setActiveTab("await");
    props.url_change(await_url);
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const search_url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchValue}&page=`;
    props.url_change(search_url);
    setSearchValue('');
  }

  return (
    <div className={cl.myHeader}>
        <div className="header__container container">
            <div className="header__body">
                <div className="header__logo">
                  <a href="#" onClick={handlePopular}><span>Movie Catalog</span></a>
                </div>
                <div className="header__tabs">
                    <Link className={activeTab === 'popular' ? 'tab active' : 'tab'} to="/movies" onClick={handlePopular}>Популярное</Link>
                    <Link className={activeTab === 'best' ? 'tab active' : 'tab'} to="/movies" onClick={handleBest}>Лучшее</Link>
                    <Link className={activeTab === 'await' ? 'tab active' : 'tab'} to="/movies" onClick={handleAwait}>Ожидаемое</Link>
                </div>
                <form onSubmit={handleSubmit} className="header__search-box">
                  <Input value={searchValue} onChange={handleChange} placeholder="Введите ключевые слова" />
                </form>
                <div className="header__profile">
                  <Link to="#">Выйти</Link>
                  <Link to="/about">О нас</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header