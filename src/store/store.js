import { configureStore } from '@reduxjs/toolkit'
import searchMovieSlice from '../slices/searchMovieSlice'
export default configureStore(
    {
        reducer: {
            searchMovie: searchMovieSlice
        },
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    }
)