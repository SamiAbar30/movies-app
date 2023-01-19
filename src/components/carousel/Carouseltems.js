import React, { useEffect } from 'react';
import CardMovieItem from '../cards/CardMovieItem';
import './Carouseltems.scss'
import { useSelector, useDispatch } from 'react-redux'
import {setMovies} from '../../slices/searchMovieSlice'
 const Carouseltems = () => {
    const { movies} = useSelector(state => state.searchMovie)
   
    return (
        <>
            <div className='container-fluid movie-app my-5' >

                <div className='scrollA row my-5'>
                    {
                        movies.map((Movie, index) =>
                            <CardMovieItem name={Movie.name} image={Movie.image} key={index}/>
                        )
                    }

                </div>
            </div>

        </>
    );
};

export default Carouseltems;