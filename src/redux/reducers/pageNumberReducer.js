const pageNumberReducer = (state = 1, action) => {
    switch (action.type) {
        case 'INCREASE_PAGE_NUMBER':
            return ++state;
        default:
            return state;
    }

}
export default pageNumberReducer;