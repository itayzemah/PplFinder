// state: data of users
// action: object of {payload + type}
const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_FAV_USERS':
            return state = action.payload;
        default:
            return state;
    }

}
export default usersReducer;