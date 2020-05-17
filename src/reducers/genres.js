const initialState = {
    movie: [],
    tv: []
};

export default function genres(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "ADD_MOVIE_GENRES":
            return { ...state, movie: payload };
        case "ADD_TV_GENRES":
            return { ...state, tv: payload };
        case "ADD_MOVIE_TITLES_TO_GENRE":
            const genre = state.movie.find(genre => genre.id === payload.id);
            const idx = state.movie.findIndex(genre => genre.id === payload.id);

            return {
                ...state,
                movie: [
                    ...state.movie.slice(0, idx),
                    {
                        ...genre,
                        movies: payload.movies
                    },
                    ...state.movie.slice(idx + 1)
                ]
            }

        default:
            return state;
    }
}
