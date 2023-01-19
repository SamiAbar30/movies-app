import { createSlice, current } from "@reduxjs/toolkit";

export const searchMovieSlice = createSlice(
    {
        name: "searchMovie",
        initialState: {
            movies: []
           
        },
        reducers: {
            setMovies: (state, action) => {

                state.movies = action.payload;

            },
            filterMovie: (state, action) => {
                
                const movies= current(state.movies)
                state.movies = [];
                movies.map((m) => {
                    if ((m.name.toUpperCase()).includes(action.payload)) {
                        state.movies = [...state.movies, m]
                    }

                }

                );
                console.log(state.movies);

            }
        }
    }
);
export const { setMovies, filterMovie } = searchMovieSlice.actions;
export default searchMovieSlice.reducer;
