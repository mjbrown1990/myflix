const initialState = {
    movie: {}
};

export default function genres(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "ADD_BILLBOARD_MOVIE":
            return { ...state, movie: payload };
        default:
            return state;
    }
}
