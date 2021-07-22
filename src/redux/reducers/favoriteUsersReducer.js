// state: data of users
// action: object of {payload + type}
const favoriteUsersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_FAV_USERS':
            return [...state, action.payload];
        case 'REMOVE_FAV_USERS':
            return state.filter(usr => usr.id !== action.payload);
        default:
            return state;
    }

}
export default favoriteUsersReducer;