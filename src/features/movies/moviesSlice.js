import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdbApi from '~/api/tmdbApi';

//Fetch movies
export const fetchMoviesList = createAsyncThunk('movies/fetchMoviesList', async (parameters) => {
    const response = await tmdbApi.getMoviesList(parameters.movieType, parameters.params);

    return response.results;
});

const initialState = {
    movies: [],
};

//Movie Slice reducer + actions
const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMoviesList.pending]: () => {
            console.log('Pending');
        },
        [fetchMoviesList.fulfilled]: (state, { payload }) => {
            console.log('Fetch Successfully');
            return { ...state, movies: payload };
        },
        [fetchMoviesList.rejected]: () => {
            console.log('Rejected');
        },
    },
});

export const getAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;
