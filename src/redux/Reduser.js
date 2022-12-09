export const Reduser = (state = 0 , action) => {
    switch (action.type) {
        case "INCREAS":
            return state+1;
        case "DECREAS":
            return state-1;
        case "SETID":
            return action.payload.id;
        default:
            return state
    }
}