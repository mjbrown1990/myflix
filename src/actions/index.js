export const addBillboardMovie = payload => {
    return {
        type: "ADD_BILLBOARD_MOVIE",
        payload
    };
};

export const addMovieGenres = payload => {
    return {
        type: "ADD_MOVIE_GENRES",
        payload
    };
};

export const addMoviesToGenre = payload => {
    return {
        type: "ADD_MOVIE_TITLES_TO_GENRE",
        payload
    };
}