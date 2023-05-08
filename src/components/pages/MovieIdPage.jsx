import React, { useState } from 'react'
import { useParams } from 'react-router'
import useApi from '../../hooks/useApi';
import '../../styles/style.css';
import Header from '../UI/header/Header';

const MovieIdPage = () => {
  const params = useParams();
  const id = params.id;
  const [url, setUrl] = useState(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`)
  const [data] = useApi(url);
  
  return (
    <div>
        <div className='movie__current container'>
            <div className="movie__current-info">
                <div className="movie__cover-img">
                    {data &&
                        <img src={data.posterUrlPreview} alt="" className="movie__cover" />
                    }
                </div>
                <div className="movie__text-info">
                    <div className="text__body">
                        {data &&
                            <div className="text__title">
                                <h1>Название: <span className='name'>{data.nameRu}</span></h1>
                            </div>
                        }
                        {data &&
                            <div className="text__desc">
                                <h2>Описание: {data.description}</h2>
                            </div>
                        }   
                    </div>
                </div>
            </div>
    </div>
    </div>
    
  )
}

export default MovieIdPage