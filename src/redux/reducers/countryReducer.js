const countryReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COUNRY':
            const newState = [...state, action.payload];
            return newState;
        case 'REMOVE_COUNRY':
            return state.filter(n => n !== action.payload);
        default:
            return state;
    }

}
export default countryReducer;