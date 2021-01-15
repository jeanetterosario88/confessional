// export default function manageSecret(state = {
//     secrets: []}, loading: false, action) {
//     switch(action.type){
//         case ("LOADING_SECRET"): 
//             return {...state, loading: true}
//         case ("SECRETS_LOADED"):
//             return {...state, 
//                     loading: false
//                     secrets: action.payload;
//                     }
//         default:
//             return state
//           ...


export default function manageSecret(state = {
    secrets: []}, loading: false, action) {
    switch(action.type){
        case 'ADD_SECRET': 
        return {
            ...state, //manipulate something inside state, spread the state to do something
            secrets:[...state.secrets, action.secret] // pinpoints which item in object, in this case, secrets... then maniuplating arraay again,  then comma then thing you want to add
        }//type, payload(secret, in this case), the input
        default: return state
    }
};

//reducers should always return valid state