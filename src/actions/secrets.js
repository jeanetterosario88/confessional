//action object creator function
//dispatch takes in atction send to store, to reducer
//with connect, you get a dispatch function automicatlly, that's w you send actions to recducers


export const getSecrets = () => {
    return dispatch => {
        dispatch({type: "LOADING_SECRETS"})
        fetch("/secrets")
        .then(res => res.json())
        .then(secrets => dispatch({type: "SECRETS_LOADED", payload: secrets }))
    }
}

export const addSecret = (secret) => {
    return dispatch => {
        dispatch({type: "ADD_SECRET"})
        fetch("/secrets", {
            method: "POST",
            body: JSON.stringify(secret),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => dispatch({type: "SECRET_ADDED", payload: data.data }))
    }
}