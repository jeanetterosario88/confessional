export default function manageSecret(state = {
    secrets: []}, action) {
    switch(action.type){
        case 'ADD_SECRET': 
        return {
            ...state, //manipulate something inside state, spread the state to do something
            secrets:[...state.secrets, action.secret] // pinpoints which item in object, in this case, secrets... then maniuplating arraay again,  then comma then thing you want to add
        }//type, payload(secret, in this case), the input
        default: return state
    }
};