const pageNumberReducer = (state = 1, action) => {
    switch (action.type) {
        case 'INCREASE_PAGE_NUMBER':
            return ++state;
        case 'RESET':
            return 1;
        default:
            return state;
    }

}
export default pageNumberReducer;