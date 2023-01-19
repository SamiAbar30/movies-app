import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getMovies } from '../../services/movies.service';
import { filterMovie, setMovies } from '../../slices/searchMovieSlice';
const CardSearchBody = () => {
    const [searchInput, setsearchInput] = useState("");
    const [MovieItem1, setMovieItem1] = useState([]);
    const [MovieItem, setMovieItem] = useState([
        { name: "UNCHARTED (2022)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "DEQTH ON THE NILE (2022)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "STUDIO 666 (2022)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "THE KING'S MQN (2022)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "CYRQNO (2021)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "UNCHARTED (2022)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "DEQTH ON THE NILE (2022)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "STUDIO 666 (2022)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "THE KING'S MQN (2022)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "CYRQNO (2021)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "UNCHARTED (2022)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "DEQTH ON THE NILE (2022)", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "sami ", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "yassine", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" },
        { name: "imane", categorys: ["Action", "Comedy"], image: "https://cdn.pixabay.com/photo/2016/04/30/17/42/passion-1363426_960_720.jpg" }
    ]);
    const dispatch = useDispatch();

  


    useEffect(() => {


        dispatch(filterMovie(searchInput));
        if (searchInput === "") {
            dispatch(setMovies(MovieItem));
        }


    }, [searchInput]);
    const fetchMovies = async () => {
        return await getMovies();
    }
    return (
        <>

            <div className='container text-center text-light mt-5 p-5'>

                <p className='h1'>Watch Movies</p>
                <p className=''>Enter the of the movie. serials or cartoon you want to watch</p>
                <div className=' row'>
                    <div className=' d-flex justify-content-center col-12'>
                        <div className=" position-relative  col-lg-6 col-md-9 col-sm-12 col-12">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {
                                setsearchInput(e.target.value.toUpperCase());
                            }} />
                            <button className="btn btn-danger position-absolute top-0 end-0" style={{ width: "60px" }} ><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CardSearchBody;