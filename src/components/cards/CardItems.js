import React, { useEffect, useState } from 'react';
import Carouseltems from '../carousel/Carouseltems';
import CardMovieItem from './CardMovieItem';

const CardItems = () => {
    const [activeState, setActive] = useState("Lastes Arrivals");
    const [activeCatygory, setActiveCatygory] = useState("All");
  
    useEffect(() => {

    })
    return (
        <div className='w-100 h-100 text-light' style={{ backgroundColor: "#0e2733" }}>
            <div className='container-fluid p-5'>
                <div className='row '>
                    <div className='col-6'>
                        {
                            ["Lastes Arrivals", "Popular", "Waoiting For", "Watching now"].map((name, index) =>

                                <button key={index} type="button" className={name === activeState ? "btn btn-outline-light" : "btn text-light"}>{name}</button>
                            )
                        }
                    </div>
                    <div className='col-6 d-flex justify-content-end  '>
                        <p className='m-2'>Display:</p>
                        {
                            ["All", "Films", "Serials", "Cartoon", "Anime"].map((name, index) =>

                                <button key={index} type="button" className={name === activeCatygory ? "btn btn-link text-light" : "btn text-light"}>{name}</button>
                            )
                        }
                    </div>
                </div>

              
              <Carouseltems/>
             
            </div>

        </div>
    );
};

export default CardItems;