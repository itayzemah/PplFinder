const nationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NATION':
            return [...state, action.payload];
        case 'REMOVE_NATION':
            return state.filter(n => n !== action.payload);
        default:
            return state;
    }

}
export default nationsReducer;