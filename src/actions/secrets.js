//action object creator function
//dispatch takes in atction send to store, to reducer
//with connect, you get a dispatch function automicatlly, that's w you send actions to recducers

export const getSecrets = () => {
    dispatch => {
        dispatch({type: "LOADING_SECRETS"})
        fetch("/secrets")
        .then(res => res.json())
        .then(secrets => dispatch({type: "SECRETS_LOADED", payload: secrets }))
    }
}