import React, {useState} from 'react'
import Header from '../UI/header/Header';
import MovieList from '../MovieList';
import useApi from '../../hooks/useApi';
import usePagination from '../../hooks/usePagination';
import Pagination from '../Pagination';

const Movies = () => {
    const [url, setUrl] = useState(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=`);
    const[page, setPage] = useState(1);
    const [data, totalCount] = useApi(url, page);
  
    const numbers = usePagination(totalCount);
  
    const changeApiUrl = (newUrl) => {
      setPage(1);
      setUrl(newUrl);
    }
  
    const changePage = (newPage) => {
      setPage(newPage);
    }
  
    return (
      <div>
        <Header url_change={changeApiUrl}/>
        <MovieList movies={data} />
        <Pagination changePage={changePage} numbers={numbers} page={page}/>
      </div>
    );
}

export default Movies