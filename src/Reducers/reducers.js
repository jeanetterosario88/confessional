
export default function manageSecret(state = {
    secrets: [], loading: false}, action) {
    switch(action.type){
        case ("LOADING_SECRETS"): 
            return {...state, loading: true}
        case ("SECRETS_LOADED"):
            return {...state, 
                    loading: false,
                    secrets: action.payload
                    }
        case ("ADDING_SECRET"):
            return { ...state, loading: true }
        case ("ADD_SECRET"): 
            return {
                ...state, loading: false, //manipulate something inside state, spread the state to do something
                secrets: [...state.secrets, action.payload] //might be action.secret // pinpoints which item in object, in this case, secrets... then maniuplating arraay again,  then comma then thing you want to add
            }//type, payload(secret, in this case), the input
        default: 
            return state
    }
};

//probably won't need this
// export default function manageComment(state = {
//     secrets: [], loading: false}, action) {
//     switch(action.type){
//         case ("ADD_COMMENT"): 
//             let id = action.comment.id 
//             let targetSecret = state.secrets.filter(secret => secret.id === id)[0]
//             targetSecret
//             return {
//                 ...state, //manipulate something inside state, spread the state to do something
//                 secrets:[...state.secrets, action.secret, ] // pinpoints which item in object, in this case, secrets... then maniuplating arraay again,  then comma then thing you want to add
//             }//type, payload(secret, in this case), the input
//         default: return state
//     }
// };

//reducers should always return valid state